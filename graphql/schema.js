const { ApolloServer, gql } = require("apollo-server");
const schema = gql(`
type User {
    id : ID!
    name : String!
    email : String!
}
type Query{
    userByName(name: String!): [User]
    userById(id:ID!): User
    user(id: ID!): User
}
type Mutation{
    insertUser(name : String!, email : String!): User!,
    deleteUser(id: ID!): String!,
    updateUser(id: ID!, name : String!, email : String!): User!
}
`);

module.exports = schema;