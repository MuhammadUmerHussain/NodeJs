
const CustomAPIError=require('./custom-error')
const badRequest=require('./badRequest')
const UnauthenticatedError=require("./unauthorized")


module.exports={
    CustomAPIError,badRequest,UnauthenticatedError
}