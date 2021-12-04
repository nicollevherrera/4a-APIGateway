const userResolver = {
    Query: {
        userById: async(_, { id }, { dataSources }) => {
            return await dataSources.userById(id);
        },
        allUsers: async(_, { user }, { dataSources }) => {
            return await dataSources.allUsers(user);
        }
    },

    Mutation: {
        createUser: async(_, { user }, { dataSources }) => {
            return await dataSources.createUser(user)
        }
    }
}

module.exports = userResolver;