const { gql } = require('apollo-server');

const authTypeDef = gql `

    input LoginInput {
        email: String!
        password: String!
        #role: String!
    }
    
    input SignUpInput{ 

        name: String!
        lastname: String!
        typeid: String!
        numberid: String!
        email: String!
        phone: String!
        birth: String!
        country: String!
        password: String!
        role: Int!
    }

    type Token{
        key: String!
    }
    
    type Mutation {
        logIn(logInData: LoginInput!): Token!
        signUp(signupData: SignUpInput!): Token!
    }


`;

module.exports = authTypeDef;