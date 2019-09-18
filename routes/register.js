//处理注册页面的路由
const express=require("express");
const router=express.Router();
const Usemodel=require("../models/user");
router.get("/",(req,res)=>{
    res.render("register.ejs")
});
router.post("/handle",(req,res)=>{
    // console.log(req.body);
    Usemodel.findOne({email:req.body.email}).then((data)=>{
        //  res.send("此邮箱已近注册过");
        console.log(data);
        if(data){
           res.send("此邮箱已近注册过");
        }else{
            let user=new Usemodel(req.body);
            user.save().then(()=>{
                 res.send("注册成功")
            }).catch(()=>{
                 res.send("注册失败")
            })
        }
    })
    // .catch(()=>{
    //     let user=new Usemodel(req.body);
    //     user.save().then(()=>{
    //        res.send("注册成功")
    //     }).catch(()=>{
    //        res.send("注册失败")
    //     })
    // })
});
module.exports=router;