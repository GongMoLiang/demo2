const express=require("express");
//导入注册模块路由
const regrouter=require("./routes/register");
const server=express();
const cookieParser=require("cookie-parser");

//引入模板引擎ejs
server.set("views","views");
server.set("views engine","ejs");

//中间件引入req.body属性
server.use(express.json());
server.use(express.urlencoded({extended:true}));

//设置静态托管文件夹
server.use(express.static("www"));

//注册路由
server.use("/register",regrouter);
server.listen(3000);