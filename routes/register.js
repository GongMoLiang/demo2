const express=require("express");
const router=express.Router();
router.get("/",(req,res)=>{
    res.render("register.ejs")
});
router.post("/handle",(req,res)=>{
    console.log(req.body);
    res.send("注册处理")
});
module.exports=router;