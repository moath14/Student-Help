const bookModel = require('../models/books')

exports.get = (req,res,next) => {
  const email = req.user;
  bookModel.showBooksByUser(email,(err,books) => {
    if(err) {
      return next(err)
    }
    res.render('profile',{books})
  })
}

exports.delete = (req,res,next) => {

const id = req.params.id;
const email = req.user;
bookModel.deleteBook(id,email,(err,books) =>{
  if(err)
  {
    return next(err)
  }
  res.redirect('/profile')
})


}
