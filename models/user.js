const mongoose=require("../config/db");
const schema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
}) ;
const model=mongoose.model("user",schema);
module.exports=model;
