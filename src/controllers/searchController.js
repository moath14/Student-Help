const bookModel = require('../models/books.js');

exports.get = (req,res) => {
  res.render('/search')
}
