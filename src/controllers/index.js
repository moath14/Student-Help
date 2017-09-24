const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.js')
const userController = require('./usersController');
router.get('/home', userController.home);
router.get('/login', userController.login);
router.get('/signup', userController.signup);




module.exports = router;
