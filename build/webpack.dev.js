const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  // 构建速度中等，重新构建速度快速，不能用于生产环境
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [new ProgressBarWebpackPlugin()],
});
