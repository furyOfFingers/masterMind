/* eslint-disable */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});

module.exports = {
  entry: "./src/index",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.js",
  },

  resolve: {
    alias: {
      Assets: path.resolve(__dirname, 'src/Assets/'),
      Components: path.resolve(__dirname, 'src/Components/'),
      Constants: path.resolve(__dirname, 'src/Constants/'),
      Redux: path.resolve(__dirname, 'src/Redux/'),
      Store: path.resolve(__dirname, 'src/Store/'),
      Types: path.resolve(__dirname, 'src/Types/'),
      Modules: path.resolve(__dirname, 'src/Modules/'),
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader",
        },
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.styl$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              sourceMap: true,
              modules: {
                localIdentName: "[local]--[hash:base64:4]"
              },
            },
          },
          { loader: "stylus-loader" },
        ],
      },
    ],
  },
  devServer: {
    hot: true,
    liveReload: true
  },
  plugins: [htmlPlugin],
};
