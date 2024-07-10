var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { ruruHTML } = require("ruru/server")
const cors=require('cors');
// var UserModel=require("./model/users"); // once you put here 
var { getUserById, addUser, getAllUsers,updateUser, delteUserById }=require("./model/UserImpl");
//database connectivity
const mongoose = require('./config/db')

const app = express();
const PORT = 4600;
app.use(cors({}))

//fetch schema
const userschema = require("./schema/index")

var myContext={
"getAllUsers":getAllUsers,
"getUserById":getUserById,
"addUser":addUser,
"updateUser":updateUser,
"deleteUserById":delteUserById
}

var company={
    "company":"NeoSoft",
    "baseLocation":"Andheri,Mumbai",
}

//create and use the GraphQL handler
app.all("/graphql",
    createHandler({
        schema: userschema,
        rootValue:company,
        context:myContext
    }),

)

app.listen(PORT)
console.log("Connected to port 4600")

//server the graphiQL IDE
app.get("/", (req, res) => {
    res.type("html")
    res.end(ruruHTML({ endpoint: "/graphql" }))
})

