var webpack = require('webpack');
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf');
var settings = require('./settings');
var utils = require('./utils');

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: utils.generatorStyle('dev')
      }
    ]
  },
  devtool: settings.dev.sourceMap,
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: settings.dev.port,
    publicPath: settings.dev.assetsPublicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': settings.dev.env
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: settings.common.srcPath + '/index.html',
      inject: true
    })
  ]
});
