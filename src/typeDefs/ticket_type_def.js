const { gql } = require('apollo-server');

const ticketTypeDefs = gql`

    type Ticket {
        idticket: String!
        type: String!
        price: String!
        name: String!
        address: String
        date: String
        hour: String
        country: String!
        city: String!
    }

    extend type Query {
        ticketsByName (name: String!):[Ticket], #tickets por nombre
        ticketById(idticket: String!): Ticket, #ticket por ID
        allTickets(): [Ticket] #todos los tickets
    }


`;

    module.exports = ticketTypeDefs; 