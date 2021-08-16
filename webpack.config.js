const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        secure: false
      }
    },
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /^\/old?\/$/, to: 'old' }
    //   ]
    // },
    historyApiFallback: true, // Allow reloading on any route.
    writeToDisk: true // wpds flat-out doesn't work without this.
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};