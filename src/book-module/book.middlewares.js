/* eslint-disable no-unused-vars */
const multer = require('multer');
const { v4 } = require('uuid');
const path = require('path');
const { ApiError } = require('../utility-module');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../storage'));
  },
  filename: function (req, file, cb) {
    const [a, b] = file.mimetype.split('/');
    const fileName = `Book-${Date.now()}-${v4()}.${b}`;
    req.body.book_cover = fileName;
    cb(null, fileName);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) return cb(null, true);
  return cb(new ApiError('Only images are allowed!', 400));
};

const upload = multer({ storage, fileFilter });

exports.uploadImageMiddleware = upload.single('book_cover');
