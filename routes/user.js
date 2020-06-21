var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/userController');

router.post('/', userControllers.signup);

module.exports = router;
