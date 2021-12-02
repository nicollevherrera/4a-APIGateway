const { gql } = require('apollo-server');


const roleTypeDefs = gql`

    type Role { #modelo rol
        id: String!
        type: String!
    }

    extend type Query {
        roleById (id: String!): Role  #rol por ID
        allRoles(): [Role]  #todos los roles
    } 

    input RoleInput{
        type:String!
    }

    extend type Mutation{ #crear rol
        createRole(role: RoleInput!): Role
    }

`;

    module.exports = roleTypeDefs; 