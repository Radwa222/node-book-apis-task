const express = require('express');
const path = require('path');
const morgan = require('morgan');
const { bookRoutes } = require('../book-module');
const {
  resourceNotFoundMiddleware,
  globalErrorMiddleware,
} = require('./middlewares.app');
const app = express();

// #region setup  application middlewares

app.use(express.json());
app.use(express.static(path.join(__dirname, '../../storage')));

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

app.use('/api/v1/books', bookRoutes);

app.all('*', resourceNotFoundMiddleware);
app.use(globalErrorMiddleware);

// #endregion

exports.app = app;
exports.bootstrap = (application, port, mode) => {
  const server = application.listen(
    port,
    console.log(`app is running on port ${port} with ${mode} environment `)
  );
  return server;
};
