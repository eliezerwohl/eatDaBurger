var burger = require ("../models/burger.js");
var express = require("express");
var app = express();
var router = express.Router();




var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var PORT = process.env.NODE_ENV || 8080;
// var methodOverride = require('Method-override');


// app.get("/", function(req, res){
//   burger.allBurger(function(data){
//     res.render('index', {data});

//     })
//   });

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

router.post("/devour", function(req, res) {
  burger.devour(req.body.id);
console.log(req.body.id)
  res.redirect("/")
})

// app.get("/viewAll", function(req, res){
// burger.allBurger();
//   res.redirect("/")
// })

// app.get("/newBurger/:burgerName", function(req, res){
//   burger.newBurger(req.params.burgerName);
//   res.redirect("/")
// })

// app.get("/devour/:burgerName", function(req, res){
//   burger.devour(req.params.burgerName);
//   res.redirect("/")
// })

// app.listen(PORT,function(){

//   console.log("Listenign on %s", PORT)
// })

module.exports = router;
