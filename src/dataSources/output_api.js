const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require('../server');

class OutputAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.output_api_url;
    };

    //Ticket

    async ticketById(idTicket){
        return await this.get(`/ticket/${idTicket}`);
    };

    async ticketByType(typeTicket){
        return await this.get(`/ticket/${typeTicket}`);
    };

    async ticketByOrganizer(organizerTicket){
        return await this.get(`/ticket/${organizerTicket}`);
    };

    //Sale

    async saleById(idSale){
        return await this.get(`/sale/${idSale}`);
    };

    async saleByStatus(statusSale){
        return await this.get(`/sale/${statusSale}`);
    };

    async saleByName(nameSale){
        return await this.get(`/sale/${nameSale}`);
    };

    //Event

    async eventById(idEvent){
        return await this.get(`/sale/${idEvent}`);
    };

    async eventByOrganizer(organizerEvent){
        return await this.get(`/sale/${organizerEvent}`);
    };

    async eventByName(nameEvent){
        return await this.get(`/sale/${nameEvent}`);
    };
}

modules.exports  = OutputAPI;