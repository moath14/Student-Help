// this file for database for create new student
const connection = require('../database/dbConnection.js');

require('env2')('./config.env');

const signup = (name, email, password,cb) => {
  const sql = {
    text: `INSERT INTO student (name, email, password) VALUES ($1,$2,$3)`,
    values: [name, email,password]
  };

  connection.query(sql, (err, result) => {
    if (err) {
      const existed = new Error('existed student');
      cb(existed);
    } else {
      cb(null, result);
    }
  });
};

const getnewuser = (cb) => {
  const sql = {
    text: `SELECT id,name ,email, password  FROM student`
  };
  connection.query(sql, (err, result) => {
    if (err) {
      const getErr = new Error('Error in getting student');
      cb(getErr);
    } else {
      cb(null, result);
    }
  });
};

module.exports = {getnewuser};
