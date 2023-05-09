// eslint-disable-next-line import/no-extraneous-dependencies -- its a dev dep, for building
import webpack from 'webpack';
import fs from 'fs';
import * as path from 'path';
import { entryForSlug } from './commonComponents/utils.mjs';

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
        minimize: prodBuild,
      },
      output: {
        path: path.resolve('./dist'),
        filename: `${pageName}.js`,
      },
      resolve: {
        extensions: ['.js', '.jsx'],
      },
      module: {
        rules: [
          {
            test: /\.(?:js|mjs|cjs)x?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-react', {
                    targets: {
                      browsers: ['IE 8'],
                    },
                  }],
                ],
                plugins: (
                  modernBuild
                    ? ['@babel/plugin-syntax-import-assertions']
                    : ['@babel/plugin-syntax-import-assertions', '@babel/plugin-transform-regenerator']
                ),
              },
            },
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
    });
    console.info(`Watching ${pageName}`);
    compiler.watch({
      aggregateTimeout: 300,
      poll: false,
    }, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.info(`Build ${pageName} successfully`);
      }
    });
  });
};

build();
