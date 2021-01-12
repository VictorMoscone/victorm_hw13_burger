const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
      orm.selectAll('burgers', (res) => 
        cb(res));
    },

    insertOne(value, cb) {
      orm.insertOne(value, (res) => 
        cb(res));
    },
  
    updateOne(targetVal, cb) {
      orm.updateOne(targetVal, (res) =>
        cb(res));
    },
  };
  
  module.exports = burger;