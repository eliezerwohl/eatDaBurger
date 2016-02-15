var express = require("express");
var app = express();
var PORT = process.env.NODE_ENV || 8080;
var methodOverride = require('Method-override');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var connection =require("./config/connection.js")

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);
app.use('/viewAll', routes);
app.use('/newBurger', routes);
app.use('/devour', routes);


app.listen(PORT,function(){
  console.log("Listenign on %s", PORT)
})