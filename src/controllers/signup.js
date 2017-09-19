//this file for function which uses create new user "signup"
const signup = require('./../model/queries/signup.js');

  exports.home = (req, res, next) => {
  signup.getnewuser((err,result)=>{
    if(err){
      next(err)
    } else {
      res.render('home.hbs', {signup: result.rows});

    }
  });
};
