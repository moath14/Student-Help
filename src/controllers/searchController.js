const bookModel = require('../models/books.js');

exports.get = (req, res) => {
  const user = req.user;
  res.render('search', {user});
};

exports.post = (req, res, next) => {
  // take keyword search from student
  const keyword = req.body.keyword;
  book.searchBookByTitle(keyword, (err, data) => {
    if (err) {
      next(err);
    } else {
      res.redirect('/search', {data});
    }
  });
};
