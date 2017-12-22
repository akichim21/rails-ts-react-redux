const hypernova = require('hypernova/server');
const entryToOutput = require('./entryToOutput')

const isDev = process.env.NODE_ENV !== 'production' ? true : false;

hypernova({
  devMode: isDev,

  getComponent(name) {
    if (entryToOutput.outputFilePath[name]) {
      // 開発のときは毎回キャッシュクリアする
      if (isDev) {
        delete require.cache[entryToOutput.outputFilePath[name]];
      }
      return require(entryToOutput.outputFilePath[name]).default;
    }
    return null;
  },

  port: 3030,
});
