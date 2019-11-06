const webpackMerge = require('webpack-merge');
const commonConfig = require('./build/webpack.common.js');

module.exports = {
  components: 'src/components/**/*.vue',
  webpackConfig: webpackMerge(commonConfig),
};
