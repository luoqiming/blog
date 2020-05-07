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
        const id = query.id;
        const data = handleDetail(id);
        return new successModel("成功", data);
    }


    // 新建博客
    if (path === "/api/blog/new" && method === "POST") {
        const blogData = req.body;
        const data = handleNewBlog(blogData);
        return new successModel("成功", data);
    }


    // 更新一篇博客
    if (path === "/api/blog/update" && method === "POST") {
        const id = req.body.id;
        const blogData = req.body.blogData;
        const res = handleUpdateBlog(id, blogData);
        if (res) {
            return new successModel("成功", res);
        }
        else {
            return new errorModel("失败", res);
        }
    }

    // 删除一篇博客
    if (path === "/api/blog/del" && method === "POST") {
        const id = req.body.id;
        const res = handleDelBlog(id);
        if (res) {
            return new successModel("成功", res);
        }
        else {
            return new errorModel("失败", res);
        }
    }


}


module.exports = handleBlogRouter;