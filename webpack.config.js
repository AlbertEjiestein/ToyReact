module.exports = {
  entry: {
    main: './main.js'
  },
  mode: "development",
  optimization: {
    minimize: false
  },
  module:{
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/preset-env'],
          //   plugins: [['@babel/plugin-transform-react-jsx', {pragma: 'createElement'}]] // 将React.createElement重命名为自己想要的名字
          // }
        }
      } 
    ]
  }
}