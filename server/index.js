import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8080, () => console.log('Application started on loclhost:8080'));

/*

Webpack middleware takes a compiler, and a compiler is the webpack function, which
needs configuration (webpackConfig) to run.

For hot reloading to work, we use another middleware for express:
If express is not used in the project, than webpack-dev-server is right choice

We also need to install and setup react-hot loader to teach react to reload itself
For hot-reloading to work, components must be class based, not functional
Functional components can still be used, but not as most top-level component

*/
