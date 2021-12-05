const ticketResolver = {
    Query: {
        ticketById: async(_, { idticket }, { dataSources }) => {
            return await dataSources.outputAPI.ticketById(idticket);
        },
        ticketsByOrganizer: async(_, { organizer }, { dataSources }) => {
            return await dataSources.outputAPI.ticketsByOrganizer(organizer);
        },
        ticketsByType: async(_, { type }, { dataSources }) => {
            return await dataSources.outputAPI.ticketsByType(type);
        }
    },

    Mutation: {

        createTicket: async(_, { ticket }, { dataSources }) => {
            return await dataSources.outputAPI.createTicket(ticket);
        },

        infoTicketsOrganizer: async(_, { infoTicketsOrganizerData }, { dataSources }) => {
            return await dataSources.outputAPI.infoTicketsOrganizer(infoTicketsOrganizerData.organizer);
        },

        infoTicketsType: async(_, { infoTicketsTypeData }, { dataSources }) => {
            return await dataSources.outputAPI.infoTicketsType(infoTicketsTypeData.type);
        }
    }
}

module.exports = ticketResolver;