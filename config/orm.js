var connection =require("./connection.js");


var orm = {
// creates a new burger 
  newBurger: function(){connection.query('INSERT INTO burgers (burgerName) values (?)',[userInput], function(err, data) {
    if (err) throw err;
    });
  },
// changes burger to devoured 

devour: function(){connection.query('update burgers set devoured = 1 where burgerName = ?',[userEat], function(err, data) {
    if (err) throw err;
    });
  },
allBurger: function(){
  connection.query('SELECT * FROM burgers', function(err, col) {
    if (err) throw err;
     console.log('this is information: ', col);
    });
  },
}

orm.allBurger()