const bookService = require('./book.service');

`
  @desc      Add new Book
  @route     POST /api/v1/books
  @access    Public 
  `;
exports.createHandler = async (req, res, next) => {
  console.log(req.file);
  bookService
    .create(req.body)
    .then((data) => {
      return res.status(201).send({ data });
    })
    .catch((e) => next(e));
};

`
  @desc      Get book with id
  @route     GET /api/v1/books/:id
  @access    Public 
  `;
exports.getHandler = async (req, res, next) => {
  bookService
    .get(req.params.id)
    .then((data) => {
      return res.status(200).send({ data });
    })
    .catch((e) => next(e));
};

`
  @desc      Delete book with id
  @route     DELETE /api/v1/book/:id
  @access    Private 
  `;
exports.deleteHandler = async (req, res, next) => {
  bookService
    .remove(req.params.id)
    .then(() => {
      return res.status(204).send();
    })
    .catch((e) => next(e));
};

`
  @desc      Update book with id
  @route     PUT /api/v1/books/:id
  @access    Public 
  `;
exports.updateHandler = async (req, res, next) => {
  bookService
    .update(req.params.id, req.body)
    .then((data) => {
      return res.status(200).send({ data });
    })
    .catch((e) => next(e));
};

`
  @desc      List all books with filters
  @route     GET /api/v1/books
  @access    Public 
`;
exports.listAllHandler = async (req, res, next) => {
  return bookService
    .listAll(req.query)
    .then((data) => {
      return res.status(200).send({ data });
    })
    .catch((e) => next(e));
};
