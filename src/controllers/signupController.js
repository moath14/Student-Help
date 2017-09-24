const userModel = require('../models/users');

exports.get = (req, res) => {

  res.render('signup')
}
exports.post = (req, res) => {
console.log(req.body);
  // res.render('signup')
}
