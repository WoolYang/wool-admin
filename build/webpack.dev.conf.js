let webpack = require('webpack');
let baseConfig = require('./webpack.base.conf');
let settings = require('./defaults');

let HtmlWebpackPlugin = require('html-webpack-plugin')

let config = Object.assign({}, baseConfig, {
  devtool: settings.dev.sourceMap,
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    inline:true,
    hot: true,
    port: settings.dev.port,
    publicPath: settings.dev.assetsPublicPath
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV':  settings.dev.env
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

config.module.rules.push({
  test: /\.(less|css)$/,
  use: ['style-loader','css-loader',`less-loader?{modifyVars:${JSON.stringify(settings.common.theme)}}`]
})

module.exports = config;
