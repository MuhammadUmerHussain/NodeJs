class CustomApiError extends Error{

    constructor(msg,status)
    {
        super(msg)
        this.status=status
    }


}

const createCustomeError=(msg,status)=>{

    return new CustomApiError(msg,statusCode)
}

module.exports={createCustomeError,CustomApiError}