var graphql = require("graphql")
const {USER_LIST,USERBY_ID}=require('./Queries/UserQueries')
const {USER_ADD,USER_UPDATE, USER_DELETE}=require('./Mutations/UserMutation')
const { 
    GraphQLObjectType,
    GraphQLSchema } = graphql;


//function to fetch the data
const rtquery = new GraphQLObjectType({
    name: 'userlist',
    fields: {
        fetchUsers: USER_LIST,
        fetchById:USERBY_ID
    }
})

//function to fetch the data
const rtMutation = new GraphQLObjectType({
    name: 'createUser',
    fields: {
        addUser:USER_ADD,
        updateUsers:USER_UPDATE,
        deleteUser:USER_DELETE
    }
})
module.exports=new GraphQLSchema({query:rtquery,mutation:rtMutation})