const bookModel = require('../models/books');

exports.get = (req, res) => {
  const user = req.user;
  bookModel.showAllBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      console.log(books);
      res.render('moreBook', {books, user});
    }
  });
};
