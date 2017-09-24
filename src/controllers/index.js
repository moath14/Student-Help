const express = require('express');
const router = express.Router();

const home = require('./homeController');
const bookController = require('./bookController');

const auth = require('../middlewares/auth.js');
const signupController = require('./signupController');

router.get('/home', home.get);
router.get('/signup', signupController.get);
router.post('/signup', signupController.post);
router.post('/addBook', bookController.post);


module.exports = router;
