const { gql } = require('apollo-server');


const saleTypeDefs = gql`

    type Sale { #modelo venta
        idsale: String!
        status: String!
        price: Int
        quantity: Int 
        nameEvent: String!
    
    }

    extend type Query {
        saleById (idsale: String!): Sale #venta por ID
        allSales (): [Sale] #todas las ventas
        salesByStatus (status: String!): [Sale] #ventas por estado
        salesByEvent (nameEvent: String!): [Sale] #ventas por nombre de evento
    }

    input SaleInput{ #crear venta 
        status: String!
        price: Int
        quantity: Int 
        nameEvent: String!
    }

    input InfoSalesEventInput{
        email: String!
        numberid: String!
        nameEvent: String!
    }

    input InfoSalesStatusInput{
        email: String!
        numberid: String!
        status: String!
    }

    extend type Mutation{
        createSale(sale: SaleInput!): Sale #crear venta
        infoSaleEvent(infoSalesEventData: InfoSalesEventInput!): [Sale] #información de venta por nombre de evento 
        infoSaleStatus(infoSalesStatusData: InfoSalesStatusInput!): [Sale] #información de venta por estado
    }
    

`;

    module.exports = saleTypeDefs; 