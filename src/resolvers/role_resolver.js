const roleResolver = {
    Query: {
        roleById: async(_, { id }, { dataSources }) => {
            return await dataSources.outputAPI.roleById(id);
        },
    },

    Mutation: {
        createRole: async (_, {role}, {dataSources}) => {
            return await dataSources.outputAPI.createRole(role);
        }
    } 
}




module.exports = roleResolver;

