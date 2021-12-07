const { gql } = require('apollo-server');


const roleTypeDef = gql`

    type Role { #modelo rol
        id: Int!
        type: String!
    }

    extend type Query {
        roleById (id: Int!): Role  #rol por ID
    } 

    input RoleInput{
        type:String!
    }

    extend type Mutation{ #crear rol
        createRole(type: RoleInput!): Role
    }

`;

module.exports = roleTypeDef; 