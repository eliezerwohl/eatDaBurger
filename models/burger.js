var orm = require ("../config/orm.js");
 
var burger ={
  newBurger:orm.newBurger,
  devour :orm.devour,
  allBurger : function(cb) {
    orm.allBurger('burgers', function(res){
      cb(res)
    });
  }
}

module.exports = burger;

