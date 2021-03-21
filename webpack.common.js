const path = require("path");
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const env = require('dotenv-expand')(require('dotenv').config({ path: './.env' })).parsed;
  
// reduce it to a nice object, the same as before
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "static"),
    filename: "js/bundle.[contenthash].js",
    publicPath: "/",
    clean: true
  },
  module: {
    rules: [
      // allows use of images
      {
        test: /\.(png|jpg|svg)$/i,
        loader: "file-loader",
      },
    ],
  },
  target: 'web',
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils')
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    //Allows remove/clean the build folder
    new CleanWebpackPlugin(),
    //Allows update react components in real time
    new HotModuleReplacementPlugin(),
    //Allows to create an index.html in our build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"), //we put the file that we created in public folder
    }),
    new CaseSensitivePathsPlugin(),
    new webpack.DefinePlugin(envKeys)
  ]
};