const express = require('express');
const router = express.Router();

const home = require('./homeController');
const auth = require('../middlewares/auth.js');
const signupController = require('./signupController');
const loginController = require('./loginController');
const logoutController = require('./logoutController');
const bookController = require('./bookController');
const searchController = require('./searchController');
const profileController = require('./profileController');
const moreBookController = require('./moreBookController');

router.get('/home', home.get);

router.get('/signup', signupController.get);
router.post('/signup', signupController.post);

// function for loginController
router.get('/login', loginController.get);
router.post('/login', loginController.post);

// function for logoutController
// router.get('/logout',loginController.get);
// router.post('/logout',loginController.post);
router.get('/logout', logoutController.get);
// funation for bookController
router.post('/addbook', bookController.post);

// funation for searchController
router.get('/search', searchController.get);
router.post('/search/:keyword', searchController.post);

// router.post('/search', searchController.post);

// function for profileController
router.get('/profile', profileController.get);
router.get('/deleteBook/:id', profileController.delete);

// function for moreBookController
router.get('/moreBook', moreBookController.get);

module.exports = router;
