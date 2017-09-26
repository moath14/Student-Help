const bookModel = require('../models/books');
const userModel = require('../models/users');

exports.get = (req, res, next) => {
  const user = req.user;
  userModel.getUserByemail(user, (err, userInfo) => {
    if (err) {
      return next(err);
    }
    console.log(userInfo);
    bookModel.showBooksByUser(user, (err, books) => {
      if (err) {
        return next(err);
      }
      res.render('profile', {books, user, userInfo});
    });
  });
};

exports.delete = (req, res, next) => {
  const id = req.params.id;
  const email = req.user;
  bookModel.deleteBook(id, email, (err, books) => {
    if (err) {
      return next(err);
    }
    res.redirect('/profile');
  });
};
