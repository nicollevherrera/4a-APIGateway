const eventResolver = {
    Query: {
        eventById: async(_, { idevent }, { dataSources }) => {
            return await dataSources.outputAPI.eventById(idevent);
        },
        eventByName: async(_, { name }, { dataSources }) => {
            return await dataSources.outputAPI.eventByName(name);
        },
        eventsByOrganizer: async(_, { organizer }, { dataSources }) => {
            return await dataSources.outputAPI.eventsByOrganizer(organizer);
        }

    },

    Mutation: {
        createEvent: async(_, { event }, { dataSources }) => {
            return await dataSources.outputAPI.createEvent(event);
        },

        infoEventOrganizer: async(_, { infoEventOrganizerData }, { dataSources }) => {
            return await dataSources.outputAPI.infoEventOrganizer(infoEventOrganizerData.organizer);
        },

        infoEventName: async(_, { infoEventNameData }, { dataSources }) => {
            return await dataSources.outputAPI.infoEventName(infoEventNameData.name);
        }
    }
}

module.exports = eventResolver;