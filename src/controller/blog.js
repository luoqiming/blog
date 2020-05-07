const exet = require("../mysql/mysql")

const handleList = (author, keyword) => {
    //这里的where 1=1 实际是一个技巧，因为不确定author和keyword传不传
    // 如果不传where后跟空就会报错
    let sql = `select * from blogs where 1=1 `;
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by id desc`;
    console.log(sql)
    return exet(sql);
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