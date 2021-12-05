const eventResolver = {
    Query: {
        eventById: async(_, { idevent }, { dataSources }) => {
            return await dataSources.eventById(idevent);
        },
        eventByName: async(_, { name }, { dataSources }) => {
            return await dataSources.eventByName(name);
        },
        eventsByOrganizer: async(_, { organizer }, { dataSources }) => {
            return await dataSources.eventsByOrganizer(organizer);
        }

    },

    Mutation: {
        createEvent: async(_, { event }, { dataSources }) => {
            return await dataSources.createEvent(event);
        },

        infoEventOrganizer: async(_, { infoEventOrganizerData }, { dataSources }) => {
            return await dataSources.infoEventOrganizer(infoEventOrganizerData.organizer);
        },

        infoEventName: async(_, { infoEventNameData }, { dataSources }) => {
            return await dataSources.infoEventName(infoEventNameData.name);
        }
    }
}

module.exports = eventResolver;