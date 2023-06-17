const {
  createHandler,
  getHandler,
  deleteHandler,
  updateHandler,
  listAllHandler,
} = require('./book.controller');
const { uploadImageMiddleware } = require('./book.middlewares');
const {
  createValidator,
  getValidator,
  deleteValidator,
  updateValidator,
  listValidator,
} = require('./book.validations');
const router = require('express').Router();

router
  .route('/')
  .post(uploadImageMiddleware, createValidator, createHandler)
  .get(listValidator, listAllHandler);

router
  .route('/:id')
  .get(getValidator, getHandler)
  .put(updateValidator, updateHandler)
  .delete(deleteValidator, deleteHandler);

module.exports = router;
