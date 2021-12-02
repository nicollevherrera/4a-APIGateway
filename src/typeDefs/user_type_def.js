const { gql } = require('apollo-server');


const userTypeDefs = gql`
    type User {
        id: String!
        name: String!
        lastname: String!
        typeid: String!
        numberid: String
        email: String!
        phone: String!
        birth: String
        country: String
        password: String
        role: String!
    }

    extend type Query {
        userById (id: String!): User  #usuario por ID
        allUsers(): [User]  #todos lo usuarios
    } 

`;




module.exports = userTypeDefs; 
