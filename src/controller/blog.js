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
    let sql = `select * from blogs where 1=1 and id=${id}`;
    return exet(sql);
}


const handleNewBlog = (blogData) => {
    const { title, content } = blogData;
    if ((title !== "" && title !== undefined) && (content !== "" && content !== undefined)) {
        const author = "lqm";
        const createtime = Date.now();
        let sql = `insert into blogs (title,content,author,createtime) values('${title}','${content}','${author}',${createtime})`
        return exet(sql);
    }
    return new Promise((resolve, reject) => {
        reject("标题或者内容不能为空！");
    })

}


const handleUpdateBlog = (blogData) => {
    const { id, title, content } = blogData;
    if (id !== "" && id !== undefined) {
        if ((title !== "" && title !== undefined) && (content !== "" && content !== undefined)) {
            let sql = `update blogs set title='${title}',content='${content}' where id=${id}`;
            return exet(sql);
        }
        return new Promise((resolve, reject) => {
            reject("标题或者内容不能为空！");
        })
    }
    return new Promise((reslove, reject) => {
        reject("id不能为空！");
    })
}


const handleDelBlog = (data) => {
    const { id } = data;
    if (id !== "" && id !== undefined) {
        let sql = `delete from blogs where id=${id}`;
        return exet(sql);
    }
    return new Promise((reslove, reject) => {
        reject("id不能为空！");
    })
}


module.exports = {
    handleList,
    handleDetail,
    handleNewBlog,
    handleUpdateBlog,
    handleDelBlog
}