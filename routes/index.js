var express = require('express');
var router = express.Router();
const inputControllers = require('../controllers/inputControllers');

router.post('/survey1', inputControllers.answer1);
/* GET home page. */
router.get("/survey1", (req, res, next)=> {
  res.render("survey1");
});

router.get("/survey2", (req, res, next)=> {
  res.render("survey2");
});
router.get("/survey3", (req, res, next)=> {
  res.render("survey3");
});
router.get("/survey4", (req, res, next)=> {
  res.render("survey4");
});

router.get("/result",(req,res,next) => {
  res.render("result")
})

router.get("/diff_type",(req,res,next) => {
  res.render("diff_type")
})

module.exports = router;
