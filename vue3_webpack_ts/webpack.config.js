const path = require('path')
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
  mode: "development",
}