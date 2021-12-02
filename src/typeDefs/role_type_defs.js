const { gql } = require('apollo-server');


const roleTypeDefs = gql`

    type Role {
        id: String!
        type: String!
    }

    extend type Query {
        roleById (id: String!): Role  #rol por ID
        allRoles(): [Role]  #todos los roles
    } 


`;

    module.exports = roleTypeDefs; 