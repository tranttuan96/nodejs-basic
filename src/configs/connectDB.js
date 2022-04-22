import mysql from 'mysql2';

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: '3360',
    user: 'root',
    database: 'nodejsbasic'
});

// simple query
// connection.query(
//     'SELECT * FROM `users`',
//     function (err, results, fields) {
//         let rows = results.map(row => row);
//         console.log(rows)
//     }
// );


export default connection