const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  resolve: {
    // 创建 import 或 require 的别名，来确保模块引入变得更简单。
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
    // 能够使用户在引入模块时不带扩展：import File from '../path/to/file';
    extensions: ['.js', '.vue'],
    // 告诉 webpack 解析模块时应该搜索的目录。
    modules: ['node_modules', path.resolve(__dirname, 'src')],
  },
  module: {
    // noParse: '', // 忽略大型的 library 可以提高构建性能。
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve('node_modules/.cache/vue-loader'),
            },
          },
          'vue-loader',
        ],
      },
      {
        test: /\.jsx?$/,
        loader: [
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.resolve('node_modules/.cache/babel-loader'),
            },
          },
          'thread-loader',
          'babel-loader',
        ],
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.css$/,
        use: [!isProduction ? 'vue-style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          !isProduction ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096, // 4k 以下的图片用 url-loader
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096, // 4k 以下的图片用 url-loader
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]',
                },
              },
            },
          },
        ],
        exclude: path.resolve('src/icons'),
      },
      {
        test: /\.(svg)(\?.*)?$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'lake-icon-[name]',
            },
          },
          'svgo-loader',
        ],
        include: path.resolve('src/icons'),
      },
    ],
  },
  performance: {
    maxEntrypointSize: 300000,
    hints: isProduction ? 'warning' : false,
  },
  stats: {
    modules: false,
    children: false,
  },
  plugins: [
    new VueLoaderPlugin(),
    new CaseSensitivePathsPlugin(), // 防止 osx 系统下对大小写不敏感造成的问题，如文件夹改名
    new FriendlyErrorsPlugin(),
  ],
};
