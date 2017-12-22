const webpack = require("webpack");
const path = require('path');
const entryToOutput = require('./entryToOutput');
const DEBUG = false;

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
        loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader'],
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

module.exports = {
  cache: DEBUG,
  devtool: DEBUG ? 'source-map' : false,
  entry: entryToOutput.hmrEntry,
  output: {
    path: path.resolve("./components"),
    // railsとwebpack-dev-serverが違うので
    // https://github.com/webpack/webpack-dev-server/issues/262
    publicPath: "http://127.0.0.1:3232/components",
    filename: '[name].js'
  },
  watchOptions: watchOptions,
  module: createModule('tsconfig.json'),
  resolve: resolve,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  devServer: {
    port: 3232,

    publicPath: '/components',

    historyApiFallback: true,
    // respond to 404s with index.html
    host: '127.0.0.1',

    hot: true,
    // enable HMR on the server
    contentBase: path.resolve(__dirname, 'dist'),

    // railsとwebpack-dev-serverのurlとportが違うので
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  externals: externals
};
