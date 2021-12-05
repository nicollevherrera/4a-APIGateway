const userResolver = {
    Query: {
        userById: async(_, { id }, { dataSources }) => {
            return await dataSources.usersAPI.userById(id);
        }
    },

    Mutation: {
        createUser: async(_, { user }, { dataSources }) => {
            return await dataSources.usersAPI.createUser(user);
        }
    }
}

module.exports = userResolver;