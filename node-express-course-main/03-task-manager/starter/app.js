const express=require("express")
const app=express()


const task=require('./routes/task')
app.use(express.json())

app.use('/api/v1/tasks',task)
const port=4000

app.listen(port,console.log("Server is listening "));