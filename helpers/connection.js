const mysql = require('promise-mysql');

const connection = async () => await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "facebouk",
  waitForConnection: true,
})

module.exports = {
  connection: connection
}
