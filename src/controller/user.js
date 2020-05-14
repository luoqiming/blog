const exet = require("../mysql/mysql")
const handleLogin = (name, pwd) => {
    if (name !== "" && name !== undefined && pwd !== "" && pwd !== undefined) {
        let sql = `select password from users where username='${name}'`;
        return exet(sql);
    }
    return new Promise((resolve, reject) => {
        reject("账号或者密码不能为空！")
    })
}




module.exports = {
    handleLogin
}