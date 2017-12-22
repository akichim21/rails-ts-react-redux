const path = require('path');

var serversideOutputPath = path.resolve('../app/assets/javascripts/serverside');
var clientsideOutputPath = path.resolve('../app/assets/javascripts/components');
var entry = {
  'Counter': './src/components/Counter',
};

// hypernova用にoutputFileを作成
// entryのkeyとrender_react_componentの第一引数を一致させること
var outputFilePath = {};
Object.keys(entry).forEach(function (key) {
  outputFilePath[key] = serversideOutputPath + '/' + key + '.js';
})

var hmrEntry = {}
Object.keys(entry).forEach(function (key) {
  hmrEntry[key] = [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://127.0.0.1:3232',
    'webpack/hot/only-dev-server',
    entry[key],
  ];
})

module.exports = {
  entry: entry,
  hmrEntry: hmrEntry,
  serversideOutputPath: serversideOutputPath,
  clientsideOutputPath: clientsideOutputPath,
  outputFilePath: outputFilePath,
};

