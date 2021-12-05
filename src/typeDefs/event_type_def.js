const { gql } = require('apollo-server');

const eventTypeDef = gql `

    type Event { #modelo evento
        idevent: String!
        userid: String!
        name: String!
        organizer: String!
        date: String!
        hour: String
        city: String!
        country: String!
        address: String!
    }
    
    type Query{
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
        address: String!
    }

    input InfoEventOrganizerInput{
        email: String!
        organizer: String!
        numberid: String!
    }

    input IntoEventNameInput{
        email: String!
        name: String! #nombre evento
        numberid: String!
    }

    extend type Mutation{ 
        createEvent(event: EventInput!): Event #crear evento
        infoEventOrganizer(infoEventOrganizerData: InfoEventInput! ): [Event] #infoevento por organizador
        infoEventName(infoEventNameData: infoEventNameInput!): [Event] #info evento por nombre
    }

`;

module.exports = eventTypeDef;