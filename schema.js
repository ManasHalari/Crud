const mongoose=require("mongoose")
const User=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your Name"],
        trim:true,
    },
    email:{
        type:String,
        required:[true,"Please enter your email"],
        unique : true,
        trim:true,
    },
    password:{
        type: String,
        minlength: 8,
        maxlength:20,
        trim:true,
        required:[true,'Password is Required'],
        unique:true
    }
})

module.exports=mongoose.model("user",User)
