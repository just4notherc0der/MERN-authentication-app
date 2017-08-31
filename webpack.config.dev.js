import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  }
}

/*

Instead of actually creating bundle.js file, middleware will serve this from memory.
Only include js files from client folder.

*/
