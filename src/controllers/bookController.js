exports.get = (req, res, next) => {
  book.post.addBook((err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('addBook', {data});
    }
  });
};
