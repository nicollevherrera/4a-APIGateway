const { gql } = require('apollo-server');

const eventTypeDefs = gql`
    type Event {
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
    
    type Query{
        allEvents(): [Event], #obtener todos los eventos
        eventById (idevent: String!):Event, #obtener evento por ID
        
    }

`;

module.exports = eventTypeDefs; 