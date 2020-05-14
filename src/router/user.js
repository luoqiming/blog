const querystring = require("querystring");
const { handleLogin } = require("../controller/user");
const { successModel, errorModel } = require("../model/model");

const handleUserRouter = (req, res) => {
    const url = req.url;
    const path = url.split("?")[0];
    const query = querystring.parse(url.split("?")[1]);
    const method = req.method;

    // 登录
    if (path === "/api/blog/login" && method === "POST") {
        const name = req.body.name;
        const pwd = req.body.pwd;
        const result = handleLogin(name, pwd);
        return result.then(res => {
            let len = res.length;
            if (len == 0) {
                return new errorModel("失败", "该账户不存在！");
            }
            if (len > 0) {
                if (res[0].password === pwd) {
                    return new successModel("成功", "登录成功！");
                }
                else {
                    return new errorModel("失败", "密码错误");
                }
            }

        }).catch(e => {
            return new errorModel("失败", e);
        })





    }


}


module.exports = handleUserRouter;