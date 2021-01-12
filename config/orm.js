const connection = require('./connection.js');

//  Helper function to allow a variable amount of values to escape into a spot in the query.
const escaping = (totalEscapes) => {
    const escapeArray = [];
    // We add a ? for each value being queried...
    for (let i = 0; i < totalEscapes; i++) {
      escapeArray.push('?');
    }
    //...and then we return all of those question marks as a string.
    return escapeArray.toString();
  };

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

    insertOne(tableName, subtype, value, cb) {
      let query = "INSERT INTO ? (?) VALUES (?)";  
      connection.query(query, 
        [
          tableName,
          subtype.toString(),
          escaping(value.length),
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