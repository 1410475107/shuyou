const express = require('express');

const app = express();
//操作数据库
const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'test'
});
connection.connect();


//CORS：允许跨域
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/getkw', (req, res) => {
    let sql = 'SELECT * FROM pc LIMIT 0, 50';
    connection.query(sql, (error, results)=>{
        res.json(results);
    });
});


app.listen(81, () => {
    console.log(`Server started on port 81`);
});