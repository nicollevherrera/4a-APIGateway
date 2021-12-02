const { gql } = require('apollo-server');


const saleTypeDefs = gql`

    type Sale {
        idsale: String!
        status: String!
        price: Int
        quantity: Int 
    
    }

    extend type Query {
       saleById (idsale: String!): Sale #venta por ID
    }
`;

    module.exports = saleTypeDefs; 