const handleList = (author, keyword) => {
    return [
        {
            id: 1,
            title: "标题1",
            content: "dsdassa",
            createTime: 1546610491112,
            author: "lqm"
        },
        {
            id: 2,
            title: "标题2",
            content: "trt6547848",
            createTime: 1546610491179,
            author: "lqm2"
        }
    ]
}


const handleDetail = (id) => {
    return {
        id: 1,
        title: "标题1",
        content: "dsdassa",
        createTime: 1546610491112,
        author: "lqm"
    }

}


const handleNewBlog = (blogData) => {
    return {
        id: 5
    }

}


const handleUpdateBlog = (id, blogData) => {
    return true;
}


const handleDelBlog = (id) => {
    return true;
}


module.exports = {
    handleList,
    handleDetail,
    handleNewBlog,
    handleUpdateBlog,
    handleDelBlog
}