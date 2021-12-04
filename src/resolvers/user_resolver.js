const userResolver = {
    Query: {
        userById: async(_, { id }, { dataSources }) => {
            return await dataSources.userById(id);
        },
        allUsers: async(_, { user }, { dataSources }) => {
            return await dataSources.allUsers(user);
        }
    }
}

module.exports = userResolver;