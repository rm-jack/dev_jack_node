const mysql = require("mysql2/promise");
const { Config } = require("../config");
// const {Client} = require("ssh2");

const pool = mysql.createPool(Config.local_db);
pool.on("acquire", (connection) => {
  console.log("acquired connection " + connection.threadId);
});
pool.on("connection", (connection) => {
  console.log("acquired connection " + connection.threadId);
});
pool.on("enqueue", (connection) => {
  console.log("enqueue connection " + connection.threadId);
});
pool.on("release", (connection) => {
  console.log("release connection " + connection.threadId);
});

module.exports  = {pool}