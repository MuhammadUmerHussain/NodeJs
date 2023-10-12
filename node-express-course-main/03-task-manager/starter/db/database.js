const mango=require('mongoose');


const connectDb=(url)=>{

    mango.connect(url,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,
    })
    .then(()=>console.log('Connected To Db...')).catch((err)=>console.log(err))
}

module.exports=connectDb