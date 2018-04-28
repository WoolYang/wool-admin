/*eslint no-console:0 */
'use strict';
const env = process.env.NODE_ENV || 'dev'; //初始化环境变量
//process.env.REACT_WEBPACK_ENV = env;

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const settings = require('./build/settings'); //参数配置文件

let webpackConfig;
if (env === 'dev') {
    webpackConfig = require('./build/webpack.dev.conf');
    let devServer = 'webpack-dev-server/client?http://127.0.0.1:' + settings.dev.port;
    let hotDevServer = 'webpack/hot/dev-server';
    webpackConfig.entry = [devServer, hotDevServer, webpackConfig.entry];

    let isInitialCompilation = true;

    const compiler = webpack(webpackConfig);

    new WebpackDevServer(compiler, webpackConfig.devServer)
        .listen(settings.dev.port, 'localhost', (err) => {
            if (err) {
                console.log(err);
            }
            console.log('Listening at localhost:' + settings.dev.port);
        });

    compiler.plugin('done', () => {
        if (isInitialCompilation) {
            setTimeout(() => {
                console.log('\n✓ The bundle is now ready for serving!\n');
                console.log('  Open in iframe mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + settings.dev.port + '/webpack-dev-server/');
                console.log('  Open in inline mode:\t\x1b[33m%s\x1b[0m', 'http://localhost:' + settings.dev.port + '/\n');
                console.log('  \x1b[33mHMR is active\x1b[0m. The bundle will automatically rebuild and live-update on changes.');
            }, 350);
        }
        isInitialCompilation = false;
    });
}
