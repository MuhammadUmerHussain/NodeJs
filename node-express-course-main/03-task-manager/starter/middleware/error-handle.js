
const {CustomApiError}=require('../errors/custom-errors')
const errorHandler=(err,req,res,next)=>{
    if(err instanceof CustomApiError){
        return res.status(500).json({msg:err})
    }
    
}
module.exports=errorHandler