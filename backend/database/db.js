var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: 'userinfo'
  });
con.connect();
module.exports =con;