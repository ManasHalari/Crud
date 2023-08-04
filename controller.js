const User=require("../models/schema.js")
exports.registerUser=async (req,res)=>{
    try{
    const {name,email,password}=req.body
    const userExists=await User.findOne({email})
    if(userExists){
        throw new Error("This email is already used")
    }
    const userPassword=await User.findOne({password})
    if (userPassword) {
        throw new Error("This password is already used")
        
    }
    const user=await User.create({name,email,password})
    res.status(201).json({
        success:true,
        message:"User registered successfully",
        user
    })

}catch{
    res.status(400).json({
        success:false,
        message:"User not registered successfully"
    })
}
}
exports.loginUser=async (req,res)=>{
    try{
    const {email,password}=req.body
    const userExists=await User.findOne({email})
    const userPassword=await User.findOne({password})
    if(userExists && userPassword){
       res.send("You are allowed to Acess App")
    }
 
   
    res.status(201).json({
        success:true,
        message:"User registered successfully"
    })

}catch{
    res.status(400).json({
        success:false,
        message:"User not registered successfully"
    })
}
}