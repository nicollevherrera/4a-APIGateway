const eventResolver = {
    Query: {
        allEvents: async(_, { event }, { dataSources }) => {
            return await dataSources.allEvents(event);
        },
        eventById: async(_, { idevent }, { dataSources }) => {
            return await dataSources.eventById(idevent);
        },
        eventByName: async(_, { name }, { dataSources }) => {
            return await dataSources.eventByName(name);
        },
        eventsByOrganizer: async(_, { organizer }, { dataSources }) => {
            return await dataSources.eventsByOrganizer(organizer);
        }

    }
}

module.exports = eventResolver;