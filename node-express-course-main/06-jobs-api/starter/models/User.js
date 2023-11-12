const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { required } = require('joi');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        maxlength: 50,
        minlength: 3
    },
    email: {
        type: String,
        required: [true, 'Email is missing'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Please provide a valid email',
        ],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 6
    }
});

UserSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});
UserSchema.methods.creatJWT=function(){
    return jwt.sign({
        id:this._id,name:this.name
    },"JWT",{expiresIn:"30d"})
}
UserSchema.methods.comparePassword=async function(p){
    console.log(this.password)
    const isMatch=bcrypt.compare(p,this.password)
    return isMatch
}
module.exports = mongoose.model('User', UserSchema);
