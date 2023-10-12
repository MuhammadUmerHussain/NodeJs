
const Task=require('../models/Task')

const getTasks=async(req,res)=>{
   
    try{ const task= await Task.find({})
    res.status(201).json(task);
}catch(error){
    res.status(500).json({msg:error})
}
}
const createTask = async (req,res)=>{
    try{
    const task=await Task.create(req.body)
    res.status(201).json({task})
}catch(error){
    res.status(500).json({msg:error})
}
    // res.send(req.body)
}

const updateTask=async(req,res)=>{
   
    try{
        const {id:TaskId}=req.params
        const task=await Task.findOneAndUpdate({_id:TaskId},req.body,{
            new:true,
            runValidators:true,
        })
        if(!task){
            return res.status(404).json({msg:TaskId})
        }
        res.status(201).json({task})

    }catch(error){
        res.status(500).json({msg:error})
    }
}
const deleteTask=async(req,res)=>{
    try{
        const {id:TaskId}=req.params
        const task=await Task.findOneAndDelete({_id:TaskId})
        if(!task){
            return res.status(404).json({msg:'no task found'})
        }
        res.status(201).json({task})

    }catch(error){
        res.status(500).json({msg:error})
    }
}
const getTask=async(req,res)=>{
    try{
        const {id:TaskId}=req.params
        const task=await Task.findOne({_id:TaskId})
        if(!task){
            return res.status(404).json({msg:'no task found'})
        }
        res.status(201).json({task})

    }catch(error){
        res.status(500).json({msg:error})
    }
   
}
module.exports={
    getTasks,createTask,updateTask,deleteTask,getTask
}
