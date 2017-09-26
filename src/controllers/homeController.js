const book = require('../models/books.js');

exports.get = (req, res, next) => {
  const user = req.user;
  book.showAllBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {books, user});
    }
  });
};

exports.getabout = (req, res) => {
  const user = req.user;
  res.render('about', {user});
};

exports.getbooks = (req, res) => {
  const user = req.user;
  book.showAllBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('books', {books, user});
    }
  });
};
exports.getAllbooks = (req, res) => {
  const user = req.user;
  book.showAllBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('moreBook', {books, user});
    }
  });
};

exports.get4books = (req, res) => {
  const user = req.user;
  book.showFourBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('books', {books, user});
    }
  });
};
