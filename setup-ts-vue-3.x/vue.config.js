module.exports = {
  configureWebpack: config => {
    config.resolve = {
      extensions: [".js", ".jsx", ".json", ".vue", ".ts"], // 表示这几个文件的后缀名可以省略不写
      alias: {
        vue: "vue/dist/vue.esm-bundler.js" // 这个加上，重新启动就可以使用了
      }
    };
  }
}; //配置文件还得是js, 否则写成ts不生效
