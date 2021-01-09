const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
      orm.all('cats', (res) => cb(res));
    },
    // The variables cols and vals are arrays.
    insertOne(cols, vals, cb) {
      orm.create('cats', cols, vals, (res) => cb(res));
    },
  
    update(objColVals, condition, cb) {
      orm.update('cats', objColVals, condition, (res) => cb(res));
    },
  };
  
  module.exports = burger;