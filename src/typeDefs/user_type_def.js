const { gql } = require('apollo-server');


const userTypeDef = gql `

    type User { #modelo usuario
        id: String!
        name: String!
        lastname: String!
        typeid: String!
        numberid: String!
        email: String!
        phone: String!
        birth: String!
        country: String!
        password: String!
        role: String!
    }

    extend type Query {
        userById (id: String!): User  #usuario por ID
    } 

    input UserInput{
        name: String!
        lastname: String!
        typeid: String!
        numberid: String
        email: String!
        phone: String!
        birth: String!
        country: String!
        password: String!
        role: String!
    }

    extend type Mutation{ #crear usuario
        createUser(User: UserInput!): User
    }

`;




module.exports = userTypeDef;