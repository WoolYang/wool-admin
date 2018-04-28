var settings = require('./settings');

module.exports = {
  entry: settings.common.entryPath,
  output: {
    path: settings.common.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'prod'
      ? settings.build.assetsPublicPath
      : settings.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css', '.less'], //不支持空
    alias: {
      actions: `${settings.common.srcPath}/actions/`,
      components: `${settings.common.srcPath}/components/`,
      sources: `${settings.common.srcPath}/sources/`,
      stores: `${settings.common.srcPath}/stores/`,
      styles: `${settings.common.srcPath}/styles/`,
      config: `${settings.common.srcPath}/config/` + process.env.NODE_ENV
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        include: settings.common.srcPath,
        use: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: [].concat(
          settings.common.additionalPaths,
          [settings.common.srcPath]
        )
      },
      {
        test: /\.(png|jpg|gif|woff|woff2)$/,
        use: 'url-loader?limit=8192'
      },
      {
        test: /\.(mp4|ogg|svg)$/,
        use: 'file-loader'
      }
    ]
  }
};
