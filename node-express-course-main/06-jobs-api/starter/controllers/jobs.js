const { NotFoundError,BadRequestError } = require("../errors");
const Job = require("../models/Job");

const getJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobID },
  } = req;

  const job = await Job.findOne({
    _id: jobID,
    createdBy: userId,
  });
  if (!job) {
    throw new NotFoundError(`Not Found Job ${jobID}`);
  }
  res.status(200).json({ job });
};
const getAllJob = async (req, res) => {
  const user = await Job.find({
    createdBy: req.user.userId,
  }).sort("createdAt");

  res.status(200).json({ user });
};

const createJob = async (req, res) => {
  const user = req.user;

  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  // console.log(req)
  res.status(200).json({ job });
};
const updateJob = async (req, res) => {
   const {user:{userId},params:{id:jobID}, body:{
      company,position
   }}=req

   if (company === '' || position === '') {
      throw new BadRequestError('Company or Position fields cannot be empty')
    }

    const job = await Job.findByIdAndUpdate(
      { _id: jobID, createdBy: userId },
      req.body,
      { new: true, runValidators: true }
    )
    if (!job) {
      throw new NotFoundError(`No job with id ${jobID}`)
    }
    res.status(200).json({ job })
   
};
const deleteJob = async (req, res) => {
   const {
      user: { userId },
      params: { id: jobId },
    } = req
  
    const job = await Job.findByIdAndRemove({
      _id: jobId,
      createdBy: userId,
    })
    if (!job) {
      throw new NotFoundError(`No job with id ${jobId}`)
    }
    res.status(200).send()
};
module.exports = {
  getJob,
  getAllJob,
  createJob,
  updateJob,
  deleteJob,
};
