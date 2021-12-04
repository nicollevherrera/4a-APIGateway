const roleResolver = {
    Query: {
        roleById: async(_, { id }, { dataSources }) => {
            return await dataSources.roleById(id)
        },

        allRoles: async(_, { role }, { dataSources }) => {
            return await dataSources.allRoles(role)
        }
    }

}