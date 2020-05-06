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
        const res = handleLogin(name, pwd);
        if (res) {
            return new successModel("成功", res);
        }
        else {
            return new errorModel("失败", res);
        }
    }


}


module.exports = handleUserRouter;