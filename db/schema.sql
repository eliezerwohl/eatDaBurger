CREATE DATABASE burgers_db;
use burgers_db;
CREATE TABLE burgers (id int AUTO_INCREMENT, 
  burgerName varchar(255), 
  devoured boolean default 0, 
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  PRIMARY KEY(id) );