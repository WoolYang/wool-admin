const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const settings = require('./settings');
const utils = require('./utils');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    mode: 'development',
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
