const { RESTDataSource } = require("apollo-datasource-rest");
const server = require('../server');
const serverConfig = require('../server');

class OutputAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.output_api_url;
    };

    //Ticket

    async ticketById(idticket){
        return await this.get(`/ticket/${idticket}`);
    }

    async ticketsByOrganizer(organizer){
        return await this.get(`/tickets/${organizer}`)
    }

    async ticketsByType(type){
        return await this.get(`/tickets/${type}`)
    }

    //Mutation Tickets

    async createTicket(ticket){
        return await this.post('/ticket/', ticket);
    };

    async infoTicketsOrganizer(infoTicketsOrganizerData){
        return await this.get(`/tickets/${infoTicketsOrganizerData.organizer}`);
    };
    async infoTicketsOrganizer(organizerTicket){
        return await this.get(`/ticket/${organizerTicket}`);
    }

    async infoTicketsType(infoTicketsTypeData){
        return await this.get(`/tickets/${infoTicketsTypeData.type}`);
    };

    //Sale

    async saleById(idsale){
        return await this.get(`/sale/${idsale}`);
    };

    async saleByStatus(status){
        return await this.get(`/sale/${status}`);
    };
    async saleByStatus(statusSale){
        return await this.get(`/sale/${statusSale}`);
    }
    
    async salesByEvent(nameEvent){
        return await this.get(`/sale/${nameEvent}`)
    }

    //Mutation Sale

    async createSale(sale){
        return await this.post('/sale/', sale);
    };

    async infoSaleEvent (infoSalesEventData){
        return await this.get(`/sale/${infoSalesEventData.nameEvent}`)
    };

    async infoSaleStatus(infoSalesStatusData){
        return await this.get(`/sale/${infoSalesStatusData.status}`)
    };

    //Event

}
module.exports = OutputAPI;
