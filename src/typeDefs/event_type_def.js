const { gql } = require('apollo-server');

const eventTypeDefs = gql`
    type Event { #modelo evento
        idevent: String!
        userid: String!
        name: String!
        organizer: String!
        date: String!
        hour: String
        city: String!
        country: String!
        address: String
    }
    
    extend type Query{
        allEvents(): [Event], #obtener todos los eventos
        eventById (idevent: String!):Event, #obtener evento por ID
        eventByName (name: String!): Event, #obtener evento por nombre
        eventsByOrganizer (organizer: String!): [Event]  #obtener eventos por organizador
        
    }

    input EventInput{ #crear venta
        userid: String!
        name: String!
        organizer: String!
        date: String!
        hour: String
        city: String!
        country: String!
        address: String
    }

    input InfoEventOrganizerInput{
        email: String!
        organizer: String!
        numberid: String!
    }

    extend type Mutation{ 
        createEvent(event: EventInput!): Event #crear evento
        infoEventOrganizer(infoEventOrganizerData: InfoEventInput! ): [Event] #infoevento
    }

`;

module.exports = eventTypeDefs; 