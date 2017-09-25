const book = require('../models/books.js');

exports.get = (req, res, next) => {
  book.showAllBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {books});
    }
  });
};
