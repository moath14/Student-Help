
const book = require('../models/books.js');

exports.post = (req, res) => {

  book.addBook(req.body,(err, data) => {
    if (err) {
      throw err;
    } else {
      res.render('addBook', {data});
    }
  });
};

