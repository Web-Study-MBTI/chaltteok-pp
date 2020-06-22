var express = require('express');
var router = express.Router();
const inputControllers = require('../controllers/inputControllers');
const resultController = require('../controllers/resultController');

const userControllers = require('../controllers/userController');
router.post('/survey1', inputControllers.answer1);
/* GET home page. */
router.get("/survey1", (req, res, next)=> {
  res.render("survey1");
});

router.post('/survey2', inputControllers.answer2);

router.get("/survey2", (req, res, next)=> {
  res.render("survey2");
});

router.post('/survey3', inputControllers.answer3);
router.get("/survey3", (req, res, next)=> {
  res.render("survey3");
});

router.post('/survey4', inputControllers.answer4);
router.get("/survey4", (req, res, next)=> {
  res.render("survey4");
});

router.get("/detail/:type_idx", resultController.readDetail);
router.get("/result/:type_idx", resultController.readResult);

router.get("/diff_type",(req,res,next) => {
  res.render("diff_type")
})
router.post('/user', userControllers.signup);

router.get("/user",(req,res,next) => {
  res.render("user")
})

module.exports = router;
