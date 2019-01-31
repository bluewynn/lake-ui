const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.common');

const sourcePath = path.resolve(process.cwd(), './src');
const distPath = path.resolve(process.cwd(), './dist');

module.exports = webpackMerge(commonConfig, {
  mode: 'production',
  entry: path.join(sourcePath, './index.js'),
  output: {
    filename: '[name].[chunkhash].js',
    path: distPath,
  },
  plugins: [
    new webpack.DefinePlugin({ // remove vue dev-only code
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
        },
        output: {
          comments: false,
        },
      },
      sourceMap: false,
    }),
  ],
});
