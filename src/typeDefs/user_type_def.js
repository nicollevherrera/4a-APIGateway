const { gql } = require('apollo-server');


const userTypeDefs = gql`
    type User {
        id: String!
        name: String!
        lastname: String!
        typeid: String!
        numberid: String
        email: String
        phone: String
        birth: String
        country: String
        password: String
        role: String
    }


`;




module.exports = userTypeDefs; 
