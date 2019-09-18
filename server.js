const exprsse=require("express");
const server=exprsse();
server.use(exprsse.json());
server.use(exprsse.urlencoded({extended:true}));
server.get("/",(req,res)=>{
    res.send("你好 expres框架")
});
server.get("/hello",(req,res)=>{
    console.log(req.query);
    res.send("你好 二狗")
});
server.post("/handle",(req,res)=>{
    console.log(req.body);
    res.send("中国")
})
server.listen(3000);