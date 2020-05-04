var mysql = require('mysql');
var dotenv = require('dotenv');
dotenv.config();
// dotenv.load();

var db_config = {
    connectionLimit : 30,
    // host     : process.env.host,
    host:process.env.host,
    user     : process.env.user,
    password:process.env.password,
    database : process.env.database
    
}
// let db_config ={
//     host='localhost',
//     user='root',
//     password='root',
//     database='urlshortner'
// }

console.log(JSON.stringify(db_config));

// console.log(process);
var pool = mysql.createPool(db_config);
console.log("start");
// pool.getConnection(function(err,connection) {
//     console.log(err);
//     console.log("connection established!");
// 	connection.destroy();
// });
module.exports = pool;
