const { ApiError } = require('../../utility-module');

module.exports = (req, res, next) => {
  console.log('NotFound resource');
  return next(
    new ApiError(`cannot find this address: ${req.originalUrl}`, 404)
  );
};
