const bookModel = require('../models/books.js');

exports.get = (req,res) => {
  res.render('/search')
}

exports.postTitle = (req, res, next) => {
  book.searchBookByTitle((err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};

exports.postAuther = (req, res, next) => {
  book.searchBookByAuther((err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};

exports.postISBN = (req, res, next) => {

  book.searchBookByISBN((err, data) => {

    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};
