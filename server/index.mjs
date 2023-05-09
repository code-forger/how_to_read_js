// Require the framework and instantiate it
import fastify from 'fastify';
import ejs from 'ejs';
import fs from 'fs';
import dataJson from "../resources/data.json" assert {
      type: 'json',
      };

const server = fastify({ logger: true });

const buildPage = async ({ pageName }) => new Promise((res, rej) => {
  ejs.renderFile('./public/index.html.ejs', { pageName }, (err, str) => {
    if (err != null) {
      rej(err);
    }
    res(str);
  });
});

// Special case for home page
server.get('/', async (request, reply) => {
  reply.type('text/html');
  return buildPage({ pageName: 'home' });
});

server.get('/:pageName', async (request, reply) => {
  const { pageName } = request.params;
  reply.type('text/html');
  return buildPage({ pageName });
});

server.get('/js/:pageName', async (request, reply) => {
  const { pageName } = request.params;
  reply.type('text/javascript');
  return fs.readFileSync(`./dist/${pageName}`);
});

server.get('/css/:pageName', async (request, reply) => {
  const { pageName } = request.params;
  reply.type('text/css');
  return fs.readFileSync(`./dist/${pageName}`);
});

server.get('/api/readUser', async (request, reply) => {
  reply.type('text/json');
  return {
    userId: 5,
    userName: 'Michael'
  };
});

server.get('/api/readTodos/:userHash', async (request, reply) => {
  const { userHash } = request.params;
  console.log(userHash)
  reply.type('text/json');
  return dataJson;
});

// Run the server!
const start = async () => {
  try {
    await server.listen({ port: 3000 });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};
start();
