const { merge } = require('webpack-merge');
const path = require("path");
const common = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      // allows use typescript
      {
        test: /\.(ts|tsx)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          getCustomTransformers: () => ({
            before: [require('react-refresh-typescript')()]
          }),
        },
      },
      // allows use javascript
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/, //don't test node_modules folder
      //   use: {
      //     loader: "babel-loader",
      //     options: {
      //       plugins: [
      //         require("react-refresh/babel")
      //       ]
      //     },
      //   },
      //   resolve: {
      //     extensions: [".js", ".jsx"],
      //   },
      // },
      // allows use of CSS
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require("sass"),
              sassOptions: {
                indentWidth: 2,
                fiber: require("fibers"),
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    // react refresh
    new ReactRefreshWebpackPlugin()
  ].filter(Boolean),
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "static"),
    hot: true,
    port: process.env.PORT || 8000,
  }
});