const path = require('path')

module.exports = {

  lintOnSave: false,
  // webpack配置 - 简单配置方式
  configureWebpack: {
    resolve: {
      alias: {
        // 别名
        vue$: 'vue/dist/vue.esm.js', // 加上这一句
        '@': path.resolve(__dirname, './src'),
        '@static': path.resolve(__dirname, './static'),
      }
    }
  },
};
