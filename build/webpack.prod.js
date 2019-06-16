const path = require('path');
const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const { HashedModuleIdsPlugin, NamedChunksPlugin } = require('webpack');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../lib'),
    library: 'lake',
    libraryTarget: 'umd',
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
    },
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  performance: false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    // hash 值不稳定，vendor 库经常无意义更新
    // https://zhuanlan.zhihu.com/p/35093098
    // new HashedModuleIdsPlugin(
    //   {
    //     hashDigest: 'hex'
    //   }
    // ),
    // 配合 HashedModuleIdsPlugin 使用，解决 vendor 库的更新问题
    // https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31
    // new NamedChunksPlugin(
    //   function () { /* omitted long function */ }
    // ),
  ],
});
