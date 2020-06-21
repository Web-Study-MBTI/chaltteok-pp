var express = require('express');
var router = express.Router();
const inputControllers = require('../controllers/inputControllers');

router.post('/', inputControllers.answer1);

module.exports = router;
