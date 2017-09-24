const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.js');
const userController = require('./usersController');
const bookController = require('./bookController');
router.get('/home', userController.home);
router.get('/login', userController.login);
router.get('/signup', userController.signup);
router.get('/addBook', bookController.addBook);

module.exports = router;
