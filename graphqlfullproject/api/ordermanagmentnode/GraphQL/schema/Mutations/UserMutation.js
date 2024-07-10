const graphql = require("graphql")
const User = require('../Types/UserType')
const UserModel = require("../../model/users");
const { addUser } = require("../../model/UserImpl");
const { GraphQLInt, GraphQLString } = graphql;
//to create 
const USER_ADD = {
    type: User,
    args: {
        _id: { type: GraphQLInt },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString }
    },
    resolve: async (parent, args,context) => {
        //logic to create data
        const user = await context.addUser(args);
        console.log(user)
        return args
    }
}


const USER_UPDATE={
    type:User,
    args:{
        _id:{type:GraphQLInt}, // existing
        name:{type:GraphQLString},
        email:{type:GraphQLString},
        phone:{type:GraphQLString}
    },
    resolve:async (parent,args,context)=>{    
        const res= await context.updateUser(args)
        return res;
    }
}   

const USER_DELETE={
    type:User,
    type:User,
    args:{
        _id:{type:GraphQLInt}, // existing
    },
    resolve:async (parent,args,context)=>{    
        const res= await context.deleteUserById(args._id)
        return res;
    }
}



module.exports = {USER_ADD,USER_UPDATE,USER_DELETE,USER_UPDATE}