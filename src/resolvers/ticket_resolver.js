const ticketResolver = {
    Query: {
        ticketById: async(_, { idticket }, { dataSources }) => {
            return await dataSources.ticketById(idticket);
        },
        allTickets: async(_, { ticket }, { dataSources }) => {
            return await dataSources.allTickets(ticket);
        },
        ticketsByOrganizer: async(_, { organizer }, { dataSources }) => {
            return await dataSources.ticketsByOrganizer(organizer);
        },
        ticketsByType: async(_, { type }, { dataSources }) => {
            return await dataSources.ticketsByType(type);
        }
    }
}

module.exports = ticketResolver;