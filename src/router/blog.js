const querystring = require("querystring");
const { handleList, handleDetail, handleNewBlog, handleUpdateBlog, handleDelBlog } = require("../controller/blog");
const { successModel, errorModel } = require("../model/model");


const handleBlogRouter = (req, res) => {
    const url = req.url;
    const path = url.split("?")[0];
    const query = querystring.parse(url.split("?")[1]);
    const method = req.method;

    // 获取博客列表
    if (path === "/api/blog/list" && method === "GET") {
        const author = query.author || "";
        const keyword = query.keyword || "";
        const result = handleList(author, keyword);
        return result.then(res => {
            return new successModel("成功", res);
        }).catch(e => {
            console.log(e)
        })

    }


    // 获取博客详情
    if (path === "/api/blog/detail" && method === "GET") {
        const id = query.id || 1;
        const result = handleDetail(id);
        return result.then(res => {
            return new successModel("成功", res[0]);
        })

    }


    // 新建博客
    if (path === "/api/blog/new" && method === "POST") {
        const blogData = req.body;
        const result = handleNewBlog(blogData);
        return result.then(res => {
            return new successModel("成功", { id: res.insertId });
        }).catch(e => {
            return new errorModel("失败", e);
        })
    }


    // 更新一篇博客
    if (path === "/api/blog/update" && method === "POST") {
        const blogData = req.body;
        const result = handleUpdateBlog(blogData);
        return result.then(res => {
            return new successModel("成功", res);
        }).catch(e => {
            return new errorModel("失败", e);
        })

    }


    // 删除一篇博客
    if (path === "/api/blog/del" && method === "POST") {
        const data = req.body;
        const result = handleDelBlog(data);
        return result.then(res => {
            return new successModel("成功", res);
        }).catch(e => {
            return new errorModel("失败", e);
        })

    }
}






module.exports = handleBlogRouter;