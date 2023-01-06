import esbuild from 'esbuild';
import fs from 'fs';
import { entryForSlug } from './commonComponents/utils.mjs';

const build = async () => {
    const pages = fs.readdirSync('pages');
    const promises = pages.map((pageName) => {
        const entry = entryForSlug(pageName);
        const prodBuild = entry?.minify || false;
        return esbuild.build({
            entryPoints: [`./pages/${pageName}/index.jsx`],
            bundle: true,
            minify: prodBuild,
            sourcemap: false,
            target: ['chrome58', 'firefox57', 'safari11'],
            outfile: `dist/${pageName}.js`,

            watch: {
                onRebuild(error, result) {
                    if (error) console.error('watch build failed:', error)
                    else console.log('watch build succeeded:', result)
                },
            },
        })
    })

    console.log(await Promise.all(promises));
}


build();