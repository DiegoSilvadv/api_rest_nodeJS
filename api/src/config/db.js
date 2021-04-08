const db = require('mysql2/promise');

const sql = db.createPool({
    host: 'localhost',
    user: 'diego',
    password: '',
    database: 'teste',
    port: 3306
})

module.exports = sql;