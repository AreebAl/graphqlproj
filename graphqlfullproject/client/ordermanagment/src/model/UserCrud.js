//axios module
import axios from "axios";


const url="http://localhost:4600/graphql";
const getAllQury="query{fetchUsers{name,email,phone,_id}}";
export async function getAllusers(){
    //backendd request
  const response= await axios.get(url+"?query="+getAllQury)
  return response;
}

export function addUsers(user){
// const user={
//     _id:44,
//     name:"demo",
//     email:"this is demo",
//     phone:"q4235345"
// }
const query=`mutation{
    addUser(_id:${user._id},name:${user.name},email:${user.email},phone:${user.email}){
        name,
        email,
        _id,
    }
}`
const response=axios.post(url,{query:query});
return response;
}

export function getUserById(id){
const query=`query {
    fetchById(_id: ${id}) {
      _id
      name
      email
      phone
    }
  }
  `

return axios.get(url+"?query="+query)
}

export function updateUser(){

}