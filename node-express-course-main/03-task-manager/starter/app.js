const express=require("express")
const app=express()
const connectDb=require('./db/database')
require('dotenv').config()
const task=require('./routes/task')
app.use(express.json())

app.use(express.static('./public'))
app.use('/api/v1/tasks',task)
const port=4000




const startTask=async()=>{
    try{
        console.log(process.env.Dburl)
        await connectDb(process.env.Dburl)
        app.listen(port,console.log("Server is listening "));
    }catch (error){
        console.log(error)
    }
}

startTask()