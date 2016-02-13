var express = require("express");
var app = express();
var PORT = process.env.NODE_ENV || 8080;
var mysql = require('mysql');
var methodOverride = require('Method-override');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get("/", function(req, res){
  res.send("hey mr plinkett");
})

app.listen(PORT,function(){
  console.log("Listenign on %s", PORT)
})