const orm = require('../config/orm.js');

const burger = {
    selectAll(cb) {
      orm.selectAll('burgers', (err, res) => {
        if (err) throw err;
        cb(res);
      });
    },

    insertOne(subtype, value, cb) {
      orm.insertOne('burgers', subtype, value, (err, res) => {
        if (err) throw err;
        cb(res);
      });
    },
  
    updateOne(newVal, targetVal, cb) {
      orm.updateOne('burgers', newVal, targetVal, (err, res) => {
        if (err) throw err;
        cb(res);
      });
    },
  };
  
  module.exports = burger;