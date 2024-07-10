import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addUsers, getAllusers, getUserById } from '../model/UserCrud';
import { responsiveProperty } from '@mui/material/styles/cssUtils';
function User() {
    async function getUsers(){
       const responce=await getAllusers();
       console.log(responce);
}

async function getUserById(id){
    const responce=await getUserById(id);
    console.log(responsiveProperty)
}


async function addUser(){
const user={
    _id:10,
    name:"demo",
    email:"email@gmail.com",
    phone:"35234634"
}

    const responce=addUsers(user);
    console.log(responce);
}

async function update(){

}

async function deleteById(){

}

 return (
<div>
    {/* <button onClick={getUserById(1)}>getAllUsers</button>  */}
    <button onClick={getUsers}>getAllUsers</button>
    <button onClick={addUser}>addUsrs</button>
<Stack spacing={2} direction="row">
     <Button variant="outlined">getAllUsers</Button>
   </Stack>
</div>
 )
}

export default User