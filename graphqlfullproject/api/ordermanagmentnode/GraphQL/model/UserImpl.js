//mongoose ,UserModel
//call mongodb functions
//find,findOne,create
const mongoose = require("mongoose");
const UserModel = require("./users");

async function getAllUsers() {
  return await UserModel.find({}).exec();
}

async function getUserById(id) {
  console.log(id,"fetch user by id");
  try{
    return await UserModel.findOne({ _id: id }).exec();
  }catch(err){
    console.log(err.message)
  }
}

async function addUser(args) {
  return await UserModel.create({
    _id: args._id,
    name: args.name,
    email: args.email,
    phone: args.phone,
  });
}

async function updateUser(args){
  const filter= {_id:args._id};
  const update ={name :args.name, email : args.email, phone: args.phone};
  return await UserModel.findOneAndUpdate(filter,update, {new:true});
}


async function delteUserById(id){
return  await UserModel.findByIdAndDelete({_id:id});

}


module.exports = { getAllUsers, getUserById, addUser,updateUser,delteUserById};
