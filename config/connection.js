var mysql = require('mysql');

var connection = mysql.createConnection({
  port:3306, 
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'burgers_db'
});





module.exports=connection;
