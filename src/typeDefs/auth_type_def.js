const { gql } = require('apollo-server');

const authTypeDefs = gql`

    input LoginInput {
        username: String!
        password: String!
    }
    input SignUpInput{ #REVISAR*****

        username: String!
        password1: String!
        password2: String!
    }
    type Token{
        key: String!
    }
    type Mutation {
        logIn(credentials: LoginInput!): Token!
        signUp(signupData: SignUpInput): Token!
    }


`;

module.exports = authTypeDefs;