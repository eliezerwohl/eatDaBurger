var burger = require ("../models/burger.js");
var express = require("express");
var mysql = require('mysql');
var app = express();
var router = express.Router();
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
var PORT = process.env.NODE_ENV || 8080;




var Sequelize = require('sequelize');
var sequelize = new Sequelize('burgers_db', 'root');

var Burgers = sequelize.define('Burgers', {
 burgerName: Sequelize.STRING,
 devoured: {type:Sequelize.BOOLEAN, allowNull: false, defaultValue: false}
  // lastname: Sequelize.STRING
});

router.get('/', function(req,res) {
var s = 'SELECT * FROM burgers;';
sequelize.query(s).spread(function(results, metadata) {
  // Results will be an empty array and metadata will contain the number of affected rows.
  res.render('index', {results});
})
  });


router.post("/newburger", function(req, res) {
  Burgers.create(req.body).then(function() {
    res.redirect('/');
})
})
router.post("/devour/:burgerName", function(req, res) {
  console.log(req.params.burgerName)
  burger.devour(req.params.burgerName)
  res.redirect("/")
})

module.exports = router;

// sequelize.sync().then(function(){
//   app.listen(PORT, function() {
//     console.log("Listening on port %s", PORT);
//   })
// });
