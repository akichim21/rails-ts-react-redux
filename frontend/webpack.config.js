const webpack = require("webpack");
const path = require('path');
const entryToOutput = require('./entryToOutput');
const DEBUG = process.env.NODE_ENV == 'production' ? false : true;

const watchOptions = {
  ignored: /node_modules/,
  aggregateTimeout: 300,
  poll: 500
};

function createModule(tsconfig) {
  return {
    rules: [
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "tslint-loader",
        options: {
          configFile: 'tslint.json',
          tsConfigFilr: 'tsconfig.json',
          emitErrors: true,
          typeCheck: true
        }
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'awesome-typescript-loader',
          options: {
            configFileName: tsconfig
          }
        },
        exclude: /node_modules/
      }
    ]
  };
}

const externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true
};

const resolve = {
  extensions: ['.ts', '.tsx', '.js', 'json'],
  modules: [
    path.resolve('./node_modules'),
    path.resolve('./src')
  ]
};

module.exports = [{
  cache: DEBUG,
  devtool: DEBUG ? 'source-map' : false,
  entry: entryToOutput.entry,
  output: {
    path: entryToOutput.clientsideOutputPath,
    filename: '[name].js'
  },
  watchOptions: watchOptions,
  module: createModule('tsconfig.json'),
  resolve: resolve,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  externals: externals
},
{
  cache: DEBUG,
  devtool: DEBUG ? 'source-map' : false,
  entry: entryToOutput.entry,
  target: 'node',
  output: {
    path: entryToOutput.serversideOutputPath,
    libraryTarget: 'commonjs',
    filename: '[name].js'
  },
  watchOptions: watchOptions,
  module: createModule('tsconfig.server.json'),
  resolve: resolve,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    })
  ],
  externals: externals
}];
