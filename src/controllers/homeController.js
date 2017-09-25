const book = require('../models/books.js');

exports.get = (req, res, next) => {
  book.get.showAllBooks((err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};

exports.post = (req, res, next) => {
  book.post.searchBookByTitle((err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};

exports.post = (req, res, next) => {
  book.post.searchBookByAuther((err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};

exports.post = (req, res, next) => {
  book.post.searchBookByISBN((err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};
