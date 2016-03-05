var express = require("express");
var app = express();
var PORT = process.env.PORT || 8000;
var bodyParser = require('body-parser');
require("dotenv").config();
var expressHandlebars = require('express-handlebars');

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));

var mysql= require("mysql");
var Sequelize = require('sequelize');



if(process.env.NODE_ENV === 'production') {
  // HEROKU DB
  console.log(process.env.JAWSDB_URL);

  var sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else {
  // LOCAL DB
  var connection = new Sequelize('burgers_db', 'root');
}

var Burgers = connection.define('Burgers', {
 burgerName: Sequelize.STRING,
 devoured: {type:Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
  // lastname: Sequelize.STRING
});

app.get('/', function(req,res) {
var s = 'SELECT * FROM burgers;';
connection.query(s).spread(function(results, metadata) {
  // Results will be an empty array and metadata will contain the number of affected rows.
  res.render('index', {results});
})
  });


app.post("/newburger", function(req, res) {
  Burgers.create(req.body).then(function() {
    res.redirect('/');
})
})
app.post("/devour/:burgerName", function(req, res) {
  var burgerName = req.params.burgerName;
 Burgers.update(
  // Set Attribute values 
        { devoured:1 },
  // Where clause / criteria 
        {where:{burgerName:burgerName}} 
 ).then(function() {
    res.redirect('/');
  });
});

 connection.sync();


app.listen(PORT,function(){
  console.log("Listenign on %s", PORT)
})