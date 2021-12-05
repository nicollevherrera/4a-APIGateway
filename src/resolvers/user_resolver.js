const userResolver = {
    Query: {
        userById: async(_, { id }, { dataSources }) => {
            return await dataSources.userById(id);
        }
    },

    Mutation: {
        createUser: async(_, { user }, { dataSources }) => {
            return await dataSources.createUser(user);
        }
    }
}

module.exports = userResolver;