const express=require("express");
const router=express.Router();

const {
    getJob,getAllJob,createJob,updateJob,deleteJob
 }=require("../controllers/jobs")

router.route('/').post(createJob).get(getAllJob);
router.route('/:id').get(getJob).delete(deleteJob).patch(updateJob);

module.exports=router