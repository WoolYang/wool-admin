let webpack = require('webpack');

let baseConfig = require('./webpack.base.conf');
let settings = require('./defaults');

let HtmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = Object.assign({}, baseConfig, {
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

config.module.rules.push({
  test: /\.(less|css)$/,
  use:  ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['css-loader',`less-loader?{modifyVars:${JSON.stringify(settings.common.theme)}}`]
        })
})

module.exports = config;
