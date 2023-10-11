
const express=require('express');
const router=express.Router();

const {getTask}=require("../controllers/task")
router.route('/').get(getTask)

module.exports=router