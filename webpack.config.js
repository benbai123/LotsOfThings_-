
const path = require('path');
const webpack = require('webpack')

module.exports = {
  entry: ['./index'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
}

