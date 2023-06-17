class ApiError extends Error {
  constructor(msg, statusCode) {
    super(msg);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

module.exports = {
  ApiError,
};
