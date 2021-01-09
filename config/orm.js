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
      const query = `SELECT * FROM ${tableName};`;
      connection.query(query, (err, res) => {
        if (err) throw err;
        cb(res);
      });
    },

    insertOne(tableName, subtype, value, cb) {
      let query = `INSERT INTO ${tableName}`;
  
      query += ' (';
      query += subtype.toString();
      query += ') ';
      query += 'VALUES (';
      query += escaping(value.length);
      query += ') ';
  
      console.log(query);
  
      connection.query(query, value, (err, res) => {
        if (err) throw err;
        cb(res);
      });
    },
};
  
  module.exports = orm;