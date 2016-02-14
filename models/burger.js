var orm = require ("../config/orm.js");
 
burger ={
  newBurger:orm.newBurger,
  devour :orm.devour,
  allBurger :orm.allBurger,
}
module.exports = burger;
