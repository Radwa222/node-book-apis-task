const { ApiError } = require('../utility-module');
const APIFilter = require('../utility-module/api-filtering.utility');
const Book = require('./book.model');

exports.create = async (data) => {
  const book = new Book(data);
  return book.save().then((created) => created);
};

exports.get = async (id) => {
  return Book.findById(id).then((book) => book);
};

exports.listAll = async (query) => {
  let queryBuilder = new APIFilter(Book.find(), query);

  // build query
  queryBuilder
    .applyFilters()
    .applySort()
    .applySearch()
    .applySelection()
    .ApplyPageination();
  //execute query
  return queryBuilder.mongooseQuery.then((list) => {
    return {
      result: list.length,
      data: list,
    };
  });
};

exports.update = async (_id, data) => {
  return Book.findOneAndUpdate({ _id }, data, { new: true }).then((updated) => {
    if (!updated) throw new ApiError('no such a book found!', 400);
    return updated;
  });
};

exports.remove = async (id) => {
  return Book.findByIdAndDelete(id).then((b) => {
    if (!b) throw new ApiError('no such a booK found!', 400);
    return b;
  });
};
