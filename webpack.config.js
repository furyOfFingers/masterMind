const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.styl$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              esModule: true,
              sourceMap: true,
              modules: {
                localIdentName: '[local]--[hash:base64:4]',
              },
            },
          },
          { loader: 'stylus-loader' },
        ],
      },
    ],
  },
  plugins: [htmlPlugin],
};
