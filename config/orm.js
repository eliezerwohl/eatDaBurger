var connection =require("./connection.js");

// creates a new burger 
connection.query('INSERT INTO burgers (burgerName) values (?)',[userInput], function(err, data) {
  if (err) throw err;
});

// changes burger to devoured 

connection.query('update burgers set devoured = 1 where burgerName = ?',[userEat], function(err, data) {
  if (err) throw err;
});

connection.query('SELECT * FROM burgers', function(err, col) {
  if (err) throw err;
 
  console.log('this is information: ', col);
});
