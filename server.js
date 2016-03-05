var express = require("express");
var app = express();
var PORT = process.env.PORT || 8000;
var methodOverride = require('Method-override');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var connection =require("./config/connection.js")

app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: false
}));
require("dotenv").config();

var Sequelize = require('sequelize');



if(process.env.NODE_ENV === 'production') {
  // HEROKU DB
  console.log(process.env.JAWSDB_URL);

  var sequelize = new Sequelize(process.env.JAWSDB_URL);
}
else {
  // LOCAL DB
  var sequelize = new Sequelize('burgers_db', 'root');
}

var Burgers = sequelize.define('Burgers', {
 burgerName: Sequelize.STRING,
 devoured: {type:Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
  // lastname: Sequelize.STRING
});

app.get('/', function(req,res) {
var s = 'SELECT * FROM burgers;';
sequelize.query(s).spread(function(results, metadata) {
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

 sequelize.sync();


app.listen(PORT,function(){
  console.log("Listenign on %s", PORT)
})