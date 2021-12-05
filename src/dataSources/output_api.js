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

    //Mutation Tickets

    async createTicket(ticket){
        return await this.post('/ticket', ticket);
    };

    async infoTicketsOrganizer(organizerTicket){
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

    //Mutation Sale

    async createSale(sale){
        return await this.post('/sale', sale);
    };

    async infoSaleEvent (nameSale){
        return await this.get(`/sale/${nameSale}`)
    };

    async infoSaleStatus(statusSale){
        return await this.get(`/sale/${statusSale}`)
    };

    async createSale(sale){
        return await this.post('/sale', sale);
    }

    //Event

    async eventById(idEvent){
        return await this.get(`/event/${idEvent}`);

    };

    //Mutation Event

    async createEvent(event){
        return await this.post('/event', event);
    };

    async infoEventOrganizer(eventOrganizer){
        return await this.get(`/event/${eventOrganizer}`);
    };

    async eventByName(eventName){
        return await this.get(`/event/${eventName}`);
    };
};



module.exports = OutputAPI;
