const saleResolver = {
    Query: {
        saleById: async(_, { idsale }, { dataSources }) => {
            return await dataSources.outputAPI.saleById(idsale);
        },
        salesByStatus: async(_, { status }, { dataSources }) => {
            return await dataSources.outputAPI.salesByStatus(status);
        },
        salesByEvent: async(_, { nameEvent }, { dataSources }) => {
            return await dataSources.outputAPI.salesByEvent(nameEvent);
        }

    },

    Mutation: {
        createSale: async(_, { sale }, { dataSources }) => {
            return await dataSources.outputAPI.createSale(sale);
        },

        infoSaleEvent: async(_, { infoSaleEventData }, { dataSources }) => {
            return await dataSources.outputAPI.infoSaleEvent(infoSaleEventData.nameEvent);
        },

        infoSaleStatus: async(_, { infoSaleStatusData }, { dataSources }) => {
            return await dataSources.outputAPI.infoSaleStatus(infoSaleStatusData.status);
        }
    }
}

module.exports = saleResolver;