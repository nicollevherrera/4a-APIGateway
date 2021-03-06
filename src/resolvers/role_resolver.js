const roleResolver = {
    Query: {
        roleById: async(_, { id }, { dataSources }) => {
            return await dataSources.usersAPI.roleById(id);
        },
    },

    Mutation: {
        createRole: async (_, {type}, {dataSources}) => {
            return await dataSources.usersAPI.createRole(type);
        }
    }
}

module.exports = roleResolver;

