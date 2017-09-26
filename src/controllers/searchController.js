const bookModel = require('../models/books.js');

exports.get = (req,res) => {
  res.render('search')
}

exports.search = (req, res, next) => {
  // take keyword search from student
  const keyword = req.body.keyword
  bookModel.searchBookByTitle(keyword,(err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('search', {data});
    }
  });
};
