const { UnauthenticatedError } = require("../errors");

const jwt = require('jsonwebtoken');
const auth=async(req,res,next)=>{

    header=req.headers.authorization;

    if(!header || !header.startsWith('Bearer'))
    {
        console.log("*",header)
        throw new UnauthenticatedError("Authentication Failed");

    }
    const token =header.split(" ")[1]
    try{

        const payload=jwt.verify(token,"JWT");

        // console.log(payload)
        req.user={userId:payload.id,name:payload.name}
        next();
    }
    catch(error)
    {
        throw new UnauthenticatedError("Authentication Failed")
    }

}

module.exports=auth
