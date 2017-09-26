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

exports.getabout = (req,res) => {
  res.render('about')
}

exports.getbooks = (req,res) => {
  book.showAllBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('books', {books});
    }
  });

}
exports.getAllbooks = (req,res) => {
  book.showAllBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('moreBook', {books});
    }
  });

}

exports.get4books = (req,res) => {
  book.showFourBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {books});
    }
  });

}
