'use strict'

var path  = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'v-circle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  babel: {
    'presets': ['es2015'],
    'plugins': ['transform-runtime']
  },
  vue: {
    autoprefixer: {
      browsers: ['last 2 versions']
    }
  }
}
