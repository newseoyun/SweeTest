const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'id',
    password: 'pw',
    database: 'DBname'
});
connection.connect((err) => {
    if(err){
        console.error('에러났음: ' + err.stack)
        return;
    }
    console.log('connected ad id: ' + connection.threadId);
});

connection.query('SELECT 1+1 AS solution', (err, rows, fields) => {
    if(err) throw err;
    console.log('The solution is: ' + rows[0].solution);
});

connection.end();