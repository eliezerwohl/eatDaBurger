var express = require("express");
var app = express();
var PORT = process.env.NODE_ENV || 8080;
var methodOverride = require('Method-override');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var connection =require("./config/connection.js")

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

connection.query('SELECT * FROM burgers', function(err, col) {
  if (err) throw err;
 
  console.log('The solution is: ', col);
});


app.get("/", function(req, res){
  res.send("hey mr plinkett");
})

app.listen(PORT,function(){
  console.log("Listenign on %s", PORT)
})