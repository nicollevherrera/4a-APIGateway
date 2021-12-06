const roleResolver = {
    Query: {
        roleById: async(_, { id }, { dataSources }) => {
            return await dataSources.usersAPI.roleById(id);
        },
    },

    Mutation: {
        createRole: async (_, {role}, {dataSources}) => {
            return await dataSources.usersAPI.createRole(role);
        }
    }
}

module.exports = roleResolver;

