const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'book title required'],
      trim: true,
      minlength: [3, 'too short book title'],
      maxlength: [32, 'too long book title'],
    },

    author: {
      type: String,
      required: [true, 'author name required'],
      trim: true,
      minlength: [3, 'too short author name'],
      maxlength: [32, 'too long author name'],
    },
    pages: {
      type: Number,
      required: [true, 'number of pages required'],
    },
    book_cover: {
      type: String,
    },
    is_read: {
      type: Boolean,
      default: false,
    },
    borrowed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const setImage = (doc) => {
  if (doc.book_cover) {
    const book_cover_url = `${process.env.BASE_URL}/${doc.book_cover}`;
    doc.book_cover = book_cover_url;
  }
};

bookSchema.post('save', (doc) => setImage(doc));
bookSchema.post('init', (doc) => setImage(doc));

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
