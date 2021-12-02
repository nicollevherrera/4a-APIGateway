const { gql } = require('apollo-server');


const roleTypeDefs = gql`

    type Role {
        id: String!
        type: String!
    }


`;

    module.exports = roleTypeDefs; 