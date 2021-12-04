const saleResolver = {
    Query: {
        saleById: async(_, { idsale }, { dataSources }) => {
            return await dataSources.saleById(idsale)
        },
        allSales: async(_, { sale }, { dataSources }) => {
            return await dataSources.allSales(sale);
        },
        salesByStatus: async(_, { status }, { dataSources }) => {
            return await dataSources.salesByStatus(status);
        },
        salesByEvent: async(_, { nameEvent }, { dataSources }) => {
            return await dataSources.salesByEvent(nameEvent);
        }

    },

    Mutation: {
        createSale: async(_, { sale }, { dataSources }) => {
            return await dataSources.createSale(sale);
        },

        infoSaleEvent: async(_, { infoSalesEventData }, { dataSources }) => {
            return await dataSources.infoSaleEvent(infoSalesEventData);
        },

        infoSaleStatus: async(_, { infoSaleStatusData }, { dataSources }) => {
            return await dataSources.infoSaleStatus(infoSaleStatusData)
        }
    }
}

module.exports = saleResolver;