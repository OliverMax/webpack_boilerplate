const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    static: './dist',
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Sandbox',
      template: 'src/index.template.html',
      minify: true,
    }),
    new ESLintPlugin({

    }),
  ],
};
