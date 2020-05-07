// 这里主要配置的是node的运行环境
const env = process.env.NODE_ENV;
let MYSQL_CONFIG;

if (env === "dev") {
    MYSQL_CONFIG = {
        host: '49.234.92.136',
        user: 'root',
        password: 'Cjd123456',
        port: '3306',
        database: 'my_blog'
    }
}

if (env === "production") {
    MYSQL_CONFIG = {
        host: '49.234.92.136',
        user: 'root',
        password: 'Cjd123456',
        port: '3306',
        database: 'my_blog'
    }
}

module.exports = MYSQL_CONFIG