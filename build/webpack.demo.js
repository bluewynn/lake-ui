const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const commonConfig = require('./webpack.common');

const developmentConfig = webpackMerge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: path.join(__dirname, '../demo/index.js'),
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../demo/dist'),
  },
  devServer: {
    port: 9527,
    publicPath: '/',
    clientLogLevel: 'none',
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(['demo/dist'], {
      root: path.resolve(process.cwd()),
    }),
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      filename: './index.html',
      title: 'UI-demo',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

const productionConfig = webpackMerge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: path.join(__dirname, '../demo/index.js'),
  output: {
    filename: '[name].[hash:8].min.js',
    path: path.join(__dirname, '../demo/dist'),
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
  },
  plugins: [
    new CleanWebpackPlugin(['demo/dist'], {
      root: path.resolve(process.cwd()),
    }),
    new HtmlWebpackPlugin({
      template: './demo/index.html',
      filename: './index.html',
      title: 'UI-demo',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.[hash:8].min.css',
    }),
  ],
});

module.exports = process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig;
