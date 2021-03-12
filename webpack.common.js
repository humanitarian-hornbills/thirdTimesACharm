const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'Production',
  //   }),
  // ],
};
