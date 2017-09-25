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
    console.log(userObj);
      if(error){
        return next(error)
      }
      // make compare "password" && hashPassword
    compare(password,userObj.password,(err,isMatch) => {

      if(err) {
        return res.redirect('/login')
      }
      if(!isMatch) {
        return res.redirect('/login')
      }
      return res.redirect('/home')

    });

  });

  }
