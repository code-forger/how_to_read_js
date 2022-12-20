// Require the framework and instantiate it
import fastify from "fastify";
import ejs from "ejs";
import fs from "fs";
import path from "path";

const server = fastify({ logger: true });


server.get('/', async (request, reply) => {
    return { status: 'ok' }
})

const buildPage = async ({ pageName }) => new Promise((res, rej) => {
    ejs.renderFile('./public/index.html.ejs', { pageName }, function(err, str){
        if (err != null) {
            rej(err);
        }
        res(str);
    });
})

server.get('/:pageName', async (request, reply) => {
    const { pageName } = request.params;
    reply.type('text/html');
    return buildPage({ pageName });
})

server.get('/js/:pageName', async (request, reply) => {
    const { pageName } = request.params;
    reply.type('text/javascript');
    return fs.readFileSync(`./dist/${pageName}`);
})

server.get('/css/:pageName', async (request, reply) => {
    const { pageName } = request.params;
    reply.type('text/css');
    return fs.readFileSync(`./dist/${pageName}`);
})

// Run the server!
const start = async () => {
    try {
        await server.listen({ port: 3000 })
    } catch (err) {
        server.log.error(err)
        process.exit(1)
    }
}
start()