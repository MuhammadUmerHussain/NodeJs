const getJob=async(req,res)=>{

    res.status(200).json({msg:"getjob"});
    }
const getAllJob=async(req,res)=>{

        res.status(200).json({msg:"getAlljob"});
        }

const createJob=async(req,res)=>{

    res.status(200).json({msg:"getAlljob"});
 }
 const updateJob=async(req,res)=>{
    res.status(200).json({msg:"update Job"});
 }
 const deleteJob=async(req,res)=>{
    res.status(200).json({msg:"delete Job"});
 }
 module.exports={
    getJob,getAllJob,createJob,updateJob,deleteJob
 }