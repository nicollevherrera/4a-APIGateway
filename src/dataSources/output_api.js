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

    async allTickets(){
        return await this.get(`/tickets/`)
    }

    //Mutation Tickets

    async createTicket(ticket){
        return await this.post('/ticket', ticket);
    };

    async infoTicketsOrganizer(organizerTicket){
        return await this.get(`/ticket/${organizerTicket}`);
    };

    async infoTicketsType(typeTicket){
        return await this.get(`/ticket/${typeTicket}`);
    };


    //Sale

    async saleById(idSale){
        return await this.get(`/sale/${idSale}`);
    };

    async saleByStatus(statusSale){
        return await this.get(`/sale/${statusSale}`);
    };

    async allSales(){
        return await this.get(`/sales/`)
    };

    //Mutation Sale

    async createSale(sale){
        return await this.post('./sale', sale);
    };

    async infoSaleEvent (nameSale){
        return await this.get(`/sale/${nameSale}`)
    };

    async infoSaleStatus(statusSale){
        return await this.get(`/sale/${statusSale}`)
    };

    //Event

    async eventById(idEvent){
        return await this.get(`/event/${idEvent}`);
    };

    async allEvents(){
        return await this.get(`/events/`)
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
