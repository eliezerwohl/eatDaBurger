var connection =require("./connection.js");
connection.query('SELECT * FROM burgers', function(err, col) {
  if (err) throw err;
 
  console.log('The solution is: ', col);
});