const path = require('path');
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const CONSTANTS = require('./constants');

// instead of @babel/polyfill
// require("core-js/stable");
// require("regenerator-runtime/runtime");

require('dotenv').config()
const HOT_PORT = process.env.HOT_PORT || CONSTANTS.DEF_HOT_PORT
const API_PORT = process.env.API_PORT || CONSTANTS.DEF_API_PORT


let info = {
  entry: {main: './src/index.js'},
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public', 'assets'),  // where webpack bundles are built
  },

  mode: 'development',
  devtool: 'source-map',

  watchOptions: {
    ignored: /node_modules/
  },

  devServer: {
    historyApiFallback: { index: 'public/index.html' },
    publicPath: "/assets/",   // where in-memory webpack output is served from instead of files
    contentBase: path.resolve(__dirname, 'public'),   // all other content is served from files here
    port: HOT_PORT,
    host: '0.0.0.0',     // allow more than localhost
    proxy: {  '/api/*': `http://localhost:${API_PORT}`,  },   // <- backend
  },

  stats: 'minimal',     // 'errors-only', default 'normal'

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "initial",
        },
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },

      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-optional-chaining',
              [ "@babel/plugin-proposal-class-properties", {"loose": true} ]
            ]
          }
        }
      },

      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },

      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },

    ],
  },

  plugins: [
    // new BundleAnalyzerPlugin()       // uncomment if you want to see graphs of sizes, runs continually
  ],

};

function configInfo() {
    // test if pwd starts with /mnt/c or /mnt/d
    // TODO: test webpack arguements for server and --watch

    const cwd = process.cwd();
    if (cwd.startsWith('/mnt/')) {
      console.error('PROBLEM: Win10 file system accessed from WSL.')
      console.error('WARNING: Initial build will be 6x-8x SLOWER !!!')
      console.error('ERROR: programs watching for file changes will not be notified!')
      console.error('       webpack serve      affected')
      console.error('       webpack --watch    affected')
      console.error('       webpack            Initial build: 6x-8x SLOWER')
      console.error('SOLUTION: access project through Linux file system.')
      console.error('SOLUTION: cd ~/path/to/project (not cd /mnt/c/path/to/project)')
      process.exit(-1);
    }

    console.log('');
    console.log('*********************************************************************');
    console.log(`* if running hotloader use    http://localhost:${info.devServer.port}  `);
    console.log(`*  expect API services on     http://localhost:${API_PORT}  `);
    console.log('*********************************************************************');

  return info
}

module.exports = configInfo()
