const book = require('../models/books.js');

exports.get = (req, res, next) => {
	console.log(req.body)
  book.showAllBooks((err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};
