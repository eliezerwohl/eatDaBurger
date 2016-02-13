var mysql = require('mysql');

var connection = mysql.createConnection({
  port:3306, 
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'burgers_db'
});

connection.query('SELECT * FROM burgers', function(err, col) {
  if (err) throw err;
 
  console.log('The solution is: ', col);
});
 
