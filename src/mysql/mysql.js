const mysql = require("mysql")
const MYSQL_CONFIG = require("../../config");

//创建链接
const con = mysql.createConnection(MYSQL_CONFIG);

// 开始链接
con.connect();

const exet = (sql) => {
    // query方法去查询数据库
    // 参数1：sql语句
    // 参数2：回调函数，函数参数1：错误，函数参数2：结果

    return new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err);
                return
            }
            resolve(result);
        })
    })

}

module.exports = exet