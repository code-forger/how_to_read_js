import webpack from 'webpack';
import fs from 'fs';
import { entryForSlug } from './commonComponents/utils.mjs';
import * as path from "path";

const build = async () => {
    const pages = fs.readdirSync('pages');
    pages.forEach((pageName) => {
        const entry = entryForSlug(pageName);
        const prodBuild = entry?.minify || false;
        const modernBuild = entry?.modern || false;

        const compiler = webpack({
            entry: `./pages/${pageName}/index.jsx`,
            mode: 'production',
            optimization: {
                minimize: prodBuild
            },
            output: {
                path: path.resolve('./dist'),
                filename: `${pageName}.js`,
            },
            resolve: {
                extensions: ['.js', '.jsx']
            },
            module: {rules: [
                    {
                        test: /\.(?:js|mjs|cjs)x?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ['@babel/preset-react', { targets: {
                                            browsers: ["IE 8"],
                                        } }]
                                ],
                                plugins: (
                                    modernBuild
                                        ? ["@babel/plugin-syntax-import-assertions"]
                                        :["@babel/plugin-syntax-import-assertions", "@babel/plugin-transform-regenerator"]
                                )
                            }
                        }
                    },
                    {
                        test: /\.css$/i,
                        use: ["style-loader", "css-loader"],
                    }
                ]}
        });
        console.info(`Watching ${pageName}`)
        compiler.watch(
            {
                // Example
                aggregateTimeout: 300,
                poll: 700,
            },(err, stats) => {
            if (err) {
                console.log(err);
            } else {
                console.info(`Build ${pageName} successfully`)
            }
        })
    })
}


build();