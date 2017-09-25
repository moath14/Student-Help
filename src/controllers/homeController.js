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

exports.post = (req, res, next) => {

  book.searchBookByTitle((err, data) => {

    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};

exports.post = (req, res, next) => {

  book.searchBookByAuther((err, data) => {

    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};

exports.post = (req, res, next) => {

  book.searchBookByISBN((err, data) => {

    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};
