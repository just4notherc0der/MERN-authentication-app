import path from 'path';
import webpack from 'webpack';

export default {
  devtools: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js')
  ],
  output: {
    path: '/',
    publicPath: '/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['react-hot', 'babel']
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

new webpack.NoErrorsPlugin() - creates cleaner error messages
new webpack.optimize.OccurenceOrderPlugin() - ensures consistent build hashes

*/
