const { gql } = require('apollo-server');


const roleTypeDef = gql`

    type Role { #modelo rol
        id: String!
        type: String!
    }

    extend type Query {
        roleById (id: String!): Role  #rol por ID
    } 

    input RoleInput{
        type:String!
    }

    extend type Mutation{ #crear rol
        createRole(role: RoleInput!): Role
    }

`;

    module.exports = roleTypeDef; 