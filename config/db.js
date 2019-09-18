//引入mongoose
const mongoose = require("mongoose");

//定义mongodb的链接地址
const url = 'mongodb://127.0.0.1:27017/express';
//使用mongoose的connect()方法去调用

mongoose.connect(url, { useNewUrlParser: true,useUnifiedTopology: true }).then(() => {
    console.log("数据库链接成功");
}).catch((err) => {
    console.log("数据连接失败");
})
module.exports=mongoose;