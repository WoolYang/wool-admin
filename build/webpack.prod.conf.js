var webpack = require('webpack');
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf');
var settings = require('./settings');
var utils = require('./utils');

var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: utils.generatorStyle()
      }
    ]
  },
  devtool: settings.build.sourceMap,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': settings.build.env
      }
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: settings.common.srcPath + '/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
});

