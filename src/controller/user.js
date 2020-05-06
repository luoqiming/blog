const handleLogin = (name, pwd) => {
    if (name === "lqm" && pwd === "123456") {
        return true
    }
    else{
        return false;
    }
}




module.exports = {
    handleLogin
}