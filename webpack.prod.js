const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      // allows use typescript
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // allows use javascript
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/, //don't test node_modules folder
      //   use: 'babel-loader',
      //   resolve: {
      //     extensions: [".js", ".jsx"],
      //   },
      // },
      // allows use of CSS
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
              sassOptions: {
                indentWidth: 2,
                fiber: require("fibers"),
                outputStyle: "compressed",
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new WebpackManifestPlugin(),
    //This get all our css and put in a unique file
    new MiniCssExtractPlugin({
      filename: "css/styles.[contenthash].css",
      chunkFilename: "css/styles.[id].css"
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
    runtimeChunk: "single",
     splitChunks: {
      chunks: 'all',
    },
  },
});