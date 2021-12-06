const roleResolver = {
    Query: {
        roleById: async(_, { id }, { dataSources }) => {
            return await dataSources.usersAPI.roleById(id);
        },
    },

    Mutation: {
        createRole: async (_, {Role}, {dataSources}) => {
            return await dataSources.usersAPI.createRole(Role);
        }
    }
}

module.exports = roleResolver;

