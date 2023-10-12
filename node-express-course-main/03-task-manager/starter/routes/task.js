
const express=require('express');
const router=express.Router();

const {getTasks,createTask,deleteTask,updateTask,getTask}=require("../controllers/task")


router.route('/').get(getTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports=router