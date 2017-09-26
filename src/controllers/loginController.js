  const userModel = require('../models/users');
  const {compare} = require('../helper/auth');

  exports.get = (req, res) => {
    res.render('login')
  }

  exports.post=(req,res,next) => {
    const email = req.body.email
    const password = req.body.password
    // get user by email
  userModel.getUserByemail(email,(error, userObj) => {
    //console.log(userObj);
      if(error){
        return next(error)
      }
      if(!userObj){
        return res.render('login',{errorMessage:'password or email are not correct'});
      }

      // make compare "password" && hashPassword
    compare(password,userObj.password,(err,isMatch) => {

      if(err) {
        return res.redirect('/login')
      }
      if(!isMatch) {
        return res.render('login',{errorMessage:' password are not correct'})
      }
      // we must set token in Cookies
      res.cookie('email',email)
      return res.redirect('/home')

    });

  });

  }
