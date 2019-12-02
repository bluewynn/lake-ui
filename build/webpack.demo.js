const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const commonConfig = require('./webpack.common');

const developmentConfig = webpackMerge(commonConfig, {
  mode: 'development', // webpack 4 不需要 DefinePlugin
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: path.resolve(__dirname, '../demo/index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../demo/dist'),
    publicPath: './',
  },
  devServer: {
    port: 9527,
    publicPath: '/',
    clientLogLevel: 'none',
    hot: true,
    stats: 'errors-only',
    overlay: true,
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/, // 忽略大型的 library 可以提高构建性能。
  },
  plugins: [
    new ProgressBarWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      filename: './index.html',
      title: 'UI-demo',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

const productionConfig = webpackMerge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    app: path.resolve(__dirname, '../demo/index.js'),
  },
  output: {
    filename: 'js/[name].[contenthash:8].js',
    path: path.resolve(__dirname, '../docs'),
    publicPath: './',
    chunkFilename: 'js/[name].[contenthash:8].js',
  },
  optimization: {
    minimize: true,
    minimizer: [
      // new TerserPlugin({
      //   parallel: 4,
      //   cache: true,
      //   sourceMap: true,
      // }),
      // new UglifyJsPlugin({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: true, // set to true if you want JS source maps
      // }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\\/]node_modules[\\\/]/,
          priority: -10,
          chunks: 'initial',
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true,
        },
      },
    },
  },
  plugins: [
    new CleanWebpackPlugin(['docs'], {
      root: path.resolve(process.cwd()),
    }),
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      filename: './index.html',
      title: 'UI-demo',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].min.css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    // }),
  ],
});

module.exports = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;
