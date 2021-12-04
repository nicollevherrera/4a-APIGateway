const { RESTDataSource } = require("apollo-datasource-rest");
const server = require('../server');
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

    async createTicket(ticket){
        return await this.post('/ticket', ticket);
    }

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

    async createSale(sale){
        return await this.post('./sale', sale);
    }

    //Event

    async eventById(idEvent){
        return await this.get(`/event/${idEvent}`);
    };

    async eventByOrganizer(organizerEvent){
        return await this.get(`/event/${organizerEvent}`);
    };

    async eventByName(nameEvent){
        return await this.get(`/event/${nameEvent}`);
    };

    async createEvent(event){
        return await this.post('/event', event);
    }
}

module.exports = OutputAPI;
