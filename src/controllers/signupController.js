const userModel = require('../models/users');
const {hash} = require('../helper/auth');

exports.get = (req, res) => {
  if (req.user) {
    res.redirect('/profile');
  } else {
    res.render('signup');
  }
};

exports.post = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  hash(password, (err, hashPassword) => {
    if (err) {
      return next(err);
    }
    userModel.register(name, email, hashPassword, (error, response) => {
      console.log(response);
      if (error) {
        return next(error);
      }
      // TODO login user here
      res.redirect('/home');
    });
  });
};
