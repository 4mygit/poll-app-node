var mysql = require('mysql');

var conn = mysql.createConnection({
    host: this.host,
    user: "root",
    password: "",
    database: "vote"
  });

  conn.connect(function(err) {
    if (err) throw err;
});


module.exports = conn;