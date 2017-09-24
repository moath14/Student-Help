
exports.get = (req, res, next) => {
  book.get.showAllBooks((err, data) => {
    if (err) {
      next(err);
    } else {
      res.render('home', {data});
    }
  });
};
