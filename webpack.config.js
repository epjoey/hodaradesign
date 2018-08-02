// This library allows us to combine paths easily
const path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
  rules: [
    {
      test: /\.js|.jsx/,
      use: {
        loader: 'babel-loader'
      }
    },
    {
      test: /\.scss/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }
  ]
}  
};