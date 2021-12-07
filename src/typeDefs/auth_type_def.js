const { gql } = require('apollo-server');

const authTypeDef = gql `

    input LoginInput {
        username: String! #viene de auth
        password: String!
        #role: String!
    }
    
    input SignUpInput{ 

        name: String! #viene de user
        lastname: String! #viene de user
        username:String! #viene de auth
        typeid: String! #viene de user
        numberid: String! #viene de user
        email: String! #viene de user
        phone: String! #viene de user
        birth: String! #viene de user
        country: String! #viene de user
        password1: String! #viene de auth
        password2: String!#viene de auth
        role: Int! #viene de user
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