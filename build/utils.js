var ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.generatorStyle = function (flag) {
    var prodStyle = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader'
        }, {
            loader: 'postcss-loader',
            options: {
                modules: true
            }
        }, {
            loader: 'less-loader',
            options: { javascriptEnabled: true }
        }]
    })

    var devStyle = [{
        loader: 'style-loader'
    }, {
        loader: 'css-loader'
    }, {
        loader: 'postcss-loader',
        options: {
            modules: true
        }
    }, {
        loader: 'less-loader',
        options: { javascriptEnabled: true }
    }]
    return flag === 'dev'
        ? devStyle
        : prodStyle
}