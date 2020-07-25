const mysql = require('promise-mysql');

const dbConfig = {
    host: 'db-our-sopt.cfuyclvgj58t.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: 'wldls1032g1',
    database: 'chaltteok_pp'
}

module.exports = mysql.createPool(dbConfig);