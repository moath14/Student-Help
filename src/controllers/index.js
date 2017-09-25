const express = require('express');
const router = express.Router();

const home = require('./homeController');
const bookController = require('./bookController');

const auth = require('../middlewares/auth.js');
const signupController = require('./signupController');
const loginController = require('./loginController');
const logoutController = require('./logoutController');

// function for signupController
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


module.exports = router;
