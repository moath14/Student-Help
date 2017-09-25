
const bookModel = require('../models/books.js');



exports.post = (req,res,next) => {
  const tilte = req.body.title
  const isbn = req.body.isbn
  const version = req.body.version
  const auther = req.body.auther
  const img_url = req.body.img_url
  const creator_email = req.user

  bookModel.addBook(tilte,isbn,version,auther,img_url,creator_email,(error,response) => {
    console.log(response);
    if(error){
      return next(error)
    } // add book done
    res.redirect('/profile')
  });
}



