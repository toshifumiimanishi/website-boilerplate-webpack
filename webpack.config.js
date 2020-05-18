const path = require('path');

module.exports = (env, argv) => {
  const MODE = argv.mode || 'development';
  const enabledSourceMap = MODE === 'development';
  const config = {
    mode: MODE,
    entry: './src/js/entry.ts',
    output: {
      path: path.resolve(__dirname, 'htdocs/js'),
      filename: 'main.js'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                url: false,
                // sorceMap: enabledSourceMap,
                importLoaders: 2
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sorceMap: enabledSourceMap,
                plugins: [
                  require('autoprefixer')({
                    grid: 'autoplace'
                  })
                ]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sorceMap: enabledSourceMap
              }
            }
          ]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: '/node_modules/',
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env'
                ]
              }
            }
          ]
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: '/node_modules/'
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    devServer: {
      contentBase: 'htdocs',
      open: false
    }
  }

  return config;
};