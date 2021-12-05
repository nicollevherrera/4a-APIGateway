const { gql } = require('apollo-server');

const ticketTypeDef = gql `

    type Ticket { #modelo ticket
        idticket: String!
        type: String!
        price: String!
        name: String!
        address: String!
        date: String!
        hour: String!
        country: String!
        city: String!
        organizer: String!
    }

    extend type Query {
        ticketById(idticket: String!): Ticket, #ticket por ID
        ticketsByOrganizer(organizer: String!): [Ticket]  #ticket por organizador
        ticketsByType (type: String!) :[Ticket] #ticket por tipo
    }

    input TicketInput{ #crear ticket
        type: String!
        price: String!
        name: String!
        address: String
        date: String
        hour: String
        country: String!
        city: String!
        organizer: String!
    }

    input InfoTicketsOrganizerInput{
        email: String!
        organizer: String!
        numberid: String!
    }

    input InfoTicketsTypeInput{
        email: String!
        organizer: String!
        numberid: String!
    }

    extend type Mutation{ 
        createTicket(ticket: TicketInput!): Ticket #crear ticket
        infoTicketsOrganizer(infoTicketsOrganizerData: InfoTicketsOrganizerInput!): [Ticket] #información ticket por organizador
        infoTicketsType(infoTicketsTypeData: InfoTicketsTypeInput!): [Ticket]
        
    }


`
module.exports = ticketTypeDef;