var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('survey');
});
router.get("/result",(req,res,next) => {
  res.render("result")
})

module.exports = router;
