const mysql  = require("mysql2/promise");

console.log("Creating connection pool...")
const pool = mysql.createPool({
    host: 'localhost',
    port: '3360',
    user: 'root',
    database: 'nodejsbasic'
})

module.exports = pool;