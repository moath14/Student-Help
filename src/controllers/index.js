const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth.js')
const signupController = require('./signupController');

router.get('/signup', signupController.get);
router.post('/signup', signupController.post);




module.exports = router;
