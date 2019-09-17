const exprsse=require("express");
const server=exprsse();
server.get("/",(req,res)=>{
    res.send("你好 expres框架")
});
server.listen(3000);