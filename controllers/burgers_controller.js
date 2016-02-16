var burger = require ("../models/burger.js");
var express = require("express");
var app = express();
var router = express.Router();
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var PORT = process.env.NODE_ENV || 8080;
router.get('/', function(req,res) {
  console.log('yup')
 burger.allBurger(function(data){
    res.render('index', {data});
  });
});

router.post("/newburger", function(req, res) {
  burger.newBurger(req.body.burgerName);
  res.redirect("/")
})
router.post("/devour/:burgerName", function(req, res) {
  console.log(req.params.burgerName)
  burger.devour(req.params.burgerName)
  res.redirect("/")
})

module.exports = router;
