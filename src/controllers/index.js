const express = require('express');
const router = express.Router();

const home = require('./homeController');
const book = require('./bookController');

const auth = require('../middlewares/auth.js');
const signupController = require('./signupController');

router.get('/', home.get);
router.get('/signup', signupController.get);
router.post('/signup', signupController.post);
router.post('/addBook', bookController.post);

module.exports = router;
