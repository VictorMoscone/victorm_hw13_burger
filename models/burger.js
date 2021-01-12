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
  
    updateOne(newVal, targetVal, cb) {
      orm.updateOne('burgers', newVal, targetVal, (res) =>
        cb(res));
    },
  };
  
  module.exports = burger;