const { defineConfig } = require('@vue/cli-service')
const CompressionWebpackPlugin = require('compression-webpack-plugin')    //引入插件
const productionGzipExtensions = ['js', 'css']      //压缩js 和css文件

module.exports = defineConfig({
  devServer: {
    host: '0.0.0.0',
    // https:true,
    port: 8080,
    client: {
      webSocketURL: 'ws://10.94.153.177:8080/ws',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  transpileDependencies: true,
  lintOnSave: false
})
