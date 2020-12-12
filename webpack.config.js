const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        //?DOES THIS WORK AND DO I NEED IT??
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: ['url-loader', 'file-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 8080,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
    // publicPath: "/dist",
    // proxy:{
    //   "/" : "http://localhost:3000/"
    // }
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};

//frontend src folder is on 8080, backend server.js is on 3000
//! images hard to store database, look into AWS for that
