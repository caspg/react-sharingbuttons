const path = require('path')
const webpack = require('webpack')

const devPath = path.join(__dirname, 'dev')

module.exports = {
  entry: path.join(devPath, 'index.jsx'),
  output: {
    path: devPath,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: devPath,
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BORING_SHARE_BUTTONS': JSON.stringify(process.env.BORING_SHARE_BUTTONS),
    }),
  ],
}
