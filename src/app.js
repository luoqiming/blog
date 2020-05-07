const handleBlogRouter = require("./router/blog");
const handleUserRouter = require("./router/user");

const app = (req, res) => {
    res.setHeader("Content-type", "application/json");

    getPostData(req).then(postData => {
        req.body = postData;

        // 处理blog的路由
        const blogDataResult = handleBlogRouter(req, res);
        if (blogDataResult) {
            blogDataResult.then(result => {
                res.end(JSON.stringify(result));
            })
            return;
        }


        // 处理user的路由
        const userData = handleUserRouter(req, res);
        if (userData) {
            res.end(JSON.stringify(userData));
            return;
        }

        // 404路由
        res.writeHead(404, { "Content-type": "text/plain" });
        res.write("404 not found")
        res.end();
    })

}

const getPostData = (req) => {
    return new Promise((resolve, reject) => {
        if (req.method !== "POST") {
            resolve({});
            return;
        }
        if (req.method === "POST") {
            let postData = "";
            req.on("data", (chunk) => {
                postData += chunk;
            })
            req.on("end", () => {
                if (postData === "") {
                    resolve({});
                    return;
                }
                else {
                    resolve(JSON.parse(postData));
                }
            })
        }
    })
}


module.exports = app;