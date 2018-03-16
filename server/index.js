import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';
import open from 'open';

// Controllers (route handlers)
import apiController from './controllers/api.controller';

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get('/api/*', apiController.getContent);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000, (err) => {
  console.log('Server runs on localhost:3000')
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:3000/`);
  }
});
