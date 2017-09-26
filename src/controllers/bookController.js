
const bookModel = require('../models/books.js');

exports.post = (req, res, next) => {
  const book = req.body;

  book.creator_email = req.user;
  bookModel.addBook(book, (error, response) => {
    if (error) {
      return next(error);
    } // add book done
    res.redirect('/profile');
  });
};
