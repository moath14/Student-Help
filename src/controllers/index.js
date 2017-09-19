const express = require('express');
const router = express.Router();

const userController = require('./userController');

router.get('/home', userController.home);




module.exports = router;
