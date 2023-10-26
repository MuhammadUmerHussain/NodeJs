

const login=async(req,res)=>{

res.status(200).json({msg:"login"});
}

const register=async(req,res)=>{

    res.status(200).json({msg:"register"});
    }

    module.exports={
        login,register
    }