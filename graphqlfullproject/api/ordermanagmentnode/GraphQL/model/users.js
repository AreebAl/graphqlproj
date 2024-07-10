const mongoose = require('mongoose')
const UserSchema=mongoose.Schema({
    _id:Number,
    name:String,
    email:String,
    phone:String
})

const UserModel=mongoose.model('User',UserSchema);
module.exports=UserModel