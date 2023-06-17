/* eslint-disable no-unused-vars */
module.exports = (err, req, res, next) => {
  let status = err.statusCode ? err.statusCode : 500;

  if (err.code && err.code === 11000) {
    err.msg = `duplicated! this field already exists`;
    status = 409;
  }

  if (err.name === 'CastError') status = 400;

  return res.status(status).send({
    errors: {
      msg: err.msg,
      status: err.statusCode,
      stack: process.env.NODE_ENV === 'development' ? err.stack : null,
      error: process.env.NODE_ENV === 'development' ? err : null,
    },
  });
};
