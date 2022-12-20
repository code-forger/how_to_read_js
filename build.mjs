import esbuild from 'esbuild';
import fs from 'fs';

const build = async () => {
    const pages = fs.readdirSync('pages');
    const promises = pages.map((pageName) => {
        return esbuild.build({
            entryPoints: [`./pages/${pageName}/index.jsx`],
            bundle: true,
            minify: true,
            sourcemap: true,
            target: ['chrome58', 'firefox57', 'safari11'],
            outfile: `dist/${pageName}.js`,
            watch: true
        })
    })

    console.log(await Promise.all(promises));
}


build();