const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[
      {
        // 指定规则生效的文件
        test: /\.ts$/,
        // 用的loader
        use: 'ts-loader',
        // 排除的文件
        exclude: /node-modules/
      }
    ]
  },
  mode: "development",
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}