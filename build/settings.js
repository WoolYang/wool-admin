const path = require('path');
module.exports = {
    common: {
        additionalPaths: [], //babel解析附加路径
        entryPath: path.join(__dirname, '../src/app/index'), //入口文件路径
        srcPath: path.join(__dirname, '/../src'), //src根目录路径
        assetsRoot: path.join(__dirname, '/../dist/assets'), //出口文件路径
    },
    build: {
        env: '"prod"', //环境变量
        assetsSubDirectory: '', //生成资源路径二级
        assetsPublicPath: '/assets/', //生成资源路径
        sourceMap: 'source-map' //生成映射文件
    },
    dev: {
        env: '"dev"', //环境变量
        port: 8001, //端口号
        autoOpenBrowser: true, //是否自动打开浏览器
        assetsSubDirectory: '', //生成资源路径二级
        assetsPublicPath: '', //生成资源路径
        sourceMap: 'source-map', //生成映射文件
        proxyTable: {} //代理
    }
};
