const ticketResolver = {
    Query: {
        ticketById: async(_, { idticket }, { dataSources }) => {
            return await dataSources.ticketById(idticket);
        },
        ticketsByOrganizer: async(_, { organizer }, { dataSources }) => {
            return await dataSources.ticketsByOrganizer(organizer);
        },
        ticketsByType: async(_, { type }, { dataSources }) => {
            return await dataSources.ticketsByType(type);
        }
    },

    Mutation: {

        createTicket: async(_, { ticket }, { dataSources }) => {
            return await dataSources.createTicket(ticket);
        },

        infoTicketsOrganizer: async(_, { infoTicketsOrganizerData }, { dataSources }) => {
            return await dataSources.infoTicketsOrganizer(infoTicketsOrganizerData.organizer);
        },

        infoTicketsType: async(_, { infoTicketsTypeData }, { dataSources }) => {
            return await dataSources.infoTicketsType(infoTicketsTypeData.type);
        }
    }
}

module.exports = ticketResolver;