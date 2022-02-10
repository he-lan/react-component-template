const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Webpackbar = require('webpackbar');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                strictMath: true
              }
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new Webpackbar(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'dev 开发环境',
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  }
}