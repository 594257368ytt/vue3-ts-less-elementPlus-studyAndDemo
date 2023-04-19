const express = require("express")
const app = express()
const vipLogin = require("./data/vip-login.json")
const adminLogin = require("./data/admin-login.json")
const url = require("url")

app.get("/login",(req, res)=>{
    const user = url.parse(req.url,true).query.user
    if(user === 'admin'){
        res.send(adminLogin)
    }else{
        res.send(vipLogin)
    }
})
app.listen(3300, () => {
    console.log('服务器运行在3300')
})