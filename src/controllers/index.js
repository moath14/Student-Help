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



router.get('/home', home.get);
router.post('/home', home.post);

router.get('/signup', signupController.get);
router.post('/signup', signupController.post);
router.post('/addBook', bookController.post);


// function for loginController
router.get('/login',loginController.get);
router.post('/login',loginController.post);

// function for logoutController
router.get('/logout',loginController.get);
router.post('/logout',loginController.post);

//funation for bookController

router.post('/addbook', bookController.post);

//funation for searchController
router.get('/search',searchController.get);
// router.post('/search', searchController.post);


// function for profileController
router.get('/profile',profileController.get);

module.exports = router;
