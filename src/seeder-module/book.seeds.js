const { Book } = require('../book-module');

const bulkData = [
  {
    title: 'book-1',
    author: 'author-1',
    pages: 1000,
    book_cover: "ysdfghjkl;'xcvbnm,./cvbnm,.",
    is_read: true,
    borrowed: true,
  },
  {
    title: 'book-2',
    author: 'author-2',
    pages: 1500,
    book_cover: "ysdfghjkl;'xcvbnm,./cvbnm,.",
    is_read: true,
  },
  {
    title: 'book-3',
    author: 'author-3',
    pages: 2000,
    book_cover: "ysdfghjkl;'xcvbnm,./cvbnm,.",
    borrowed: true,
  },
  {
    title: 'book-4',
    author: 'author-4',
    pages: 2000,
    book_cover: "ysdfghjkl;'xcvbnm,./cvbnm,.",
  },
  {
    title: 'book-5',
    author: 'author-5',
    pages: 2500,
    book_cover: "ysdfghjkl;'xcvbnm,./cvbnm,.",
  },
  {
    title: 'book-6',
    author: 'author-6',
    pages: 2500,
    book_cover: "ysdfghjkl;'xcvbnm,./cvbnm,.",
  },
  {
    title: 'book-7',
    author: 'author-7',
    pages: 5000,
    book_cover: "ysdfghjkl;'xcvbnm,./cvbnm,.",
  },
];

exports.seed = async () => {
  return await Book.insertMany(bulkData, { ordered: true });
};

exports.destroy = async () => {
  return await Book.deleteMany();
};
