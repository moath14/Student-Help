const bookModel = require('../models/books');

exports.get = (req,res) => {
  bookModel.showAllBooks((err, books) => {
    if (err) {
      next(err);
    } else {
      res.render('moreBook', {books});
    }
  });

}
