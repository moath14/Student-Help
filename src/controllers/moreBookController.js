const bookModel = require('../models/books');

exports.get = (req, res) => {
  const user = req.user;
  res.render('moreBook', {user});
};
