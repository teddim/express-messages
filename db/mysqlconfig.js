
// enter the correct username and password below

const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "messages"
});

connection.connect();

module.exports = connection;