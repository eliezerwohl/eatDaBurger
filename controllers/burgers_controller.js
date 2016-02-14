var burger = require ("../models/burger.js");
var express = require("express");
var app = express();

// 4. Create the routes for the app.

var PORT = process.env.NODE_ENV || 8080;
// var methodOverride = require('Method-override');
var bodyParser = require('body-parser');

// app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');


app.get("/", function(req, res){
  res.send("this is the main page");
})
// newBurger:orm.newBurger,
//   devour :orm.devour,
//   allBurger :orm.allBurger,

app.get("/viewAll", function(req, res){
  console.log(burger.allBurger());
  res.redirect("/")
})

app.get("/newBurger/:burgerName", function(req, res){
  burger.newBurger(req.params.burgerName);
  res.redirect("/")
})

app.get("/devour/:burgerName", function(req, res){
  burger.devour(req.params.burgerName);
  res.redirect("/")
})

app.listen(PORT,function(){
  console.log("Listenign on %s", PORT)
})

