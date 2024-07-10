const graphql = require("graphql")
const User = require('../Types/UserType');
const { GraphQLList ,GraphQLInt} = graphql;
// const my = require("../../server");
const USER_LIST = {
    type: new GraphQLList(User),
    resolve: async (parent, args,context) => {
        //logic to fetch all the data
        console.log(parent);
        return await context.getAllUsers();
    }
}

const USERBY_ID = {
    type:User,
    args:{
        _id:{type:GraphQLInt}
    },
    resolve: async (parent, args,context) => {
        //logic to fetch all the data
        console.log(parent)
        return await context.getUserById(args._id);
    }
}

module.exports={USER_LIST,USERBY_ID}