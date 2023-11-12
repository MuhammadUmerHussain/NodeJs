
const { BadRequestError, UnauthenticatedError } = require("../errors");
const User=require("../models/User")
const login=async(req,res)=>{

    const {email,password}=req.body
    if(!email || !password){
        throw new BadRequestError("Please Enter Correct Email");
    }
const user=await User.findOne({email});
if(!user){
    throw new UnauthenticatedError("Invalid Credential")
}

ismatch=await user.comparePassword(password);
if(!ismatch)
{
    throw new UnauthenticatedError("Invalid Credential")
}

token=user.creatJWT()
    res.status(200).json({user:{
      name:user.name  
    },token});
}

const register=async(req,res)=>{
    const user = await User.create({ ...req.body })
   
   token=user.creatJWT()
    res.status(200).json({user:{
      name:user.name  
    },token});
    }

    module.exports={
        login,register
    }