var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  runtimeCompiler: true,
  filenameHashing: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack: config => {
    // Not naming bundle 'app'
    config.resolve.alias
        .set('@', resolve('src'))
        .set('~', __dirname);
    config.resolve.extensions.prepend('.vue');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },
  configureWebpack: {
    // splitChunks
    /*
    optimization: {
      splitChunks: false
    }
     */
  },
  /*
  pages: {
  },
  */
  indexPath: 'index.html',
  productionSourceMap: false
};

