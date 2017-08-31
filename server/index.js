import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();

app.use(webpackMiddleware(webpack(webpackConfig)));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(8080, () => console.log('Application started on loclhost:8080'));

/*

Webpack middleware takes a compiler, and a compiler is the webpack function, which
needs configuration (webpackConfig) to run.

*/
