// webpack.config.js
const path = require('path');

module.exports = {
  entry: './index.js', // Replace with the path to your entry JavaScript file.
  output: {
    filename: 'bundle.js', // The name of the output bundled file.
    path: path.resolve(__dirname, 'dist'), // The directory where the bundled file will be saved.
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // If you're using Babel for transpilation.
        },
      },
    ],
  },
};
