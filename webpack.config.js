const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HTMLPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLPlugin({
      template: 'src/index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],
  devServer: {
    // port: 3000
  }
}