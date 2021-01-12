const connection = require('./connection.js');

const orm = {
    selectAll(tableName, cb) {
      const query = "SELECT * FROM ??";
      connection.query(query,
        [
          tableName,
        ], (err, res) => {
        if (err) throw err;
        cb(res);
      });
    },

    insertOne(value, cb) {
      let query = "INSERT INTO burgers (burger_name) VALUES (?)";  
      connection.query(query, 
        [
          value,
        ], (err, res) => {
        if (err) throw err;
        cb(res);
      });
    },

    updateOne(tableName, newVal, targetVal, cb) {
      let query = "UPDATE ? SET ? WHERE ?";  
      connection.query(query, 
        [
          tableName,
          newVal,
          targetVal,
        ], (err, res) => {
        if (err) throw err;
        cb(res);
      });
    },
  };
  
  module.exports = orm;