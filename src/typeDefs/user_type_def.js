const { gql } = require('apollo-server');


const userTypeDefs = gql `

    type User { #modelo usuario
        id: String!
        name: String!
        lastname: String!
        typeid: String!
        numberid: String!
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

    input UserInput{
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

    extend type Mutation{ #crear usuario
        createUser(user: UserInput!): User
    }

`;




module.exports = userTypeDefs;