  const userModel = require('../models/users');
  const {compare} = require('../helper/auth');

  exports.get = (req, res) => {
    if (req.user) {
      res.redirect('/profile');
    } else {
      res.render('login');
    }
  };

  exports.post = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    // get user by email
    userModel.getUserByemail(email, (error, userObj) => {
      if (error) {
        return next(error);
      }
      if (!userObj) {
        return res.render('login', {errorMessage: 'password or email are not correct'});
      }

      // make compare "password" && hashPassword

      compare(password, userObj[0].password, (err, isMatch) => {
        if (err) {
          return res.redirect('/login');
        }
        if (!isMatch) {
          return res.render('login', {errorMessage: ' password are not correct'});
        }
      // we must set token in Cookies
        res.cookie('email', email);
        res.cookie('name', userObj[0].name);
        return res.redirect('/home');
      });
    });
  };
