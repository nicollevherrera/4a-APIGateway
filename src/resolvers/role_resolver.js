const roleResolver = {
    Query: {
        roleById: async(_, { id }, { dataSources }) => {
            return await dataSources.roleById(id);
        },
    },

    Mutation: {
        createRole: async (_, {role}, {dataSources}) => {
            return await dataSources.createRole(role);
        }
    } 
}




module.exports = roleResolver;
