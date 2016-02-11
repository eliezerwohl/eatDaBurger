var express = require("express");
var app = express();
var PORT = 8080 || process.env.NODE_ENV;
var mysql = require('mysql');

app.get("/", function(req, res){
  res.send("hey mr plinkett");
})

app.listen(PORT,function(){
  console.log("Listenign on %s", PORT)
})