var connection =require("./connection.js");


var orm = {
// creates a new burger 
  newBurger: function(userInput){connection.query('INSERT INTO burgers (burgerName) values (?)',[userInput], function(err, data) {
    if (err) throw err;
    });
  },

// changes burger to devoured 

devour: function(userInput){connection.query('update burgers set devoured = 1 where burgerName = ?',[userInput], function(err, data) {
    if (err) throw err;
    });
  },
allBurger: function(tableInput, cb){
  var s = 'SELECT * FROM ' + tableInput + ';';

  connection.query(s, function(err, results) {
    if (err) throw err;
    cb(results)
     // console.log('this is information: ', col);
    });
  },
}


 module.exports = orm;