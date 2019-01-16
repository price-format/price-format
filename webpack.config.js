/* global __dirname, require, module */
'use strict'

const webpack = require('webpack')
const { join, resolve } = require('path')
const env = require('yargs').argv.env
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

let libraryName = 'price-format'
let plugins = []
let outputFile

plugins.push(new webpack.DefinePlugin({
  VERSION: JSON.stringify(require('./package.json').version)
}))

if (env === 'build') {
  outputFile = libraryName.toLowerCase() + '.min.js'
} else {
  outputFile = libraryName.toLowerCase() + '.js'
  plugins.push(new BrowserSyncPlugin({
    ui: false,
    host: 'localhost',
    port: 3000,
    server: {
      baseDir: ['./'],
      index: './demo/index.html'
    }
  }))
}

const config = {
  entry: join(__dirname, '/src/index.js'),
  mode: env === 'build' ? 'production' : 'development',
  devtool: 'source-map',
  output: {
    path: join(__dirname, '/lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        // standard-loader as a preloader
        enforce: 'pre',
        test: /\.js?$/,
        loader: 'standard-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          error: false,
          snazzy: true,
          parser: 'babel-eslint'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  resolve: {
    modules: [resolve('./src'), resolve('./node_modules')],
    extensions: ['.js', '.scss']
  },
  plugins
}

module.exports = config
