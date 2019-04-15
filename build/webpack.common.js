const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
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
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'img/[name].[ext]',
            },
          },
        ],
        exclude: path.join(__dirname, '../src/icons'),
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'lake-icon-[name]',
            },
          },
          'svgo-loader',
        ],
        include: path.join(__dirname, '../src/icons'),
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
  plugins: [new VueLoaderPlugin(), new ProgressBarWebpackPlugin(), new FriendlyErrorsPlugin()],
};
