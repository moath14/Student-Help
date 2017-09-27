const bookModel = require('../models/books');
const userModel = require('../models/users');

exports.get = (req, res, next) => {
  const user = req.user;
  const name = req.name;
  userModel.getUserByemail(user, (err, userInfo) => {
    if (err) {
      return next(err);
    }
     userInfo=userInfo[0]
    bookModel.showBooksByUser(user, (err, books) => {
      if (err) {
        return next(err);
      }
      res.render('profile', {books, user, userInfo,name});
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
