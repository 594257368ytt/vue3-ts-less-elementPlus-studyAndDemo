const path = require('path')
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: "./src/main.ts",
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
  // 配置webpack插件
  plugins:[
    new HTMLWebpackPlugin(),
  ],
  mode: "development",
}