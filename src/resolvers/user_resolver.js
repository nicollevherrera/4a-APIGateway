const userResolver = {
    Query: {
        userById: async(_, { id }, { dataSources }) => {
            return await dataSources.usersAPI.userById(id);
        }
    },

    Mutation: {
        createUser: async(_, { User }, { dataSources }) => {
            return await dataSources.usersAPI.createUser(User);
        }
    }
}

module.exports = userResolver;