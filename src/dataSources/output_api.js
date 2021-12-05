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
    };

    async allTickets(){
        return await this.get(`/tickets/`)
    }

    async ticketsByOrganizer(organizer){
        return await this.get(`/ticket/${organizer}`)
    }

    async ticketsByType(type){
        return await this.get(`/tickets/${type}`)
    }

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
    
    async salesByEvent(eventSale){
        return await this.get(`/sale/${eventSale}`)
    }

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

    //Event

    async eventById(idEvent){
        return await this.get(`/event/${idEvent}`);
    };

    async eventsByOrganizer(organizerEvent){
        return await this.get(`/event/${organizerEvent}`)
    }

    async eventByName(nameEvent){
        return await this.get(`/event/${nameEvent}`)
    };

    //Mutation Event

    async createEvent(event){
        return await this.post('/event', event);
    };

    async infoEventOrganizer(organizerEvent){
        return await this.get(`/event/${organizerEvent}`);
    };

    //users

    async userById(userId){
        return await this.get(`/users/${userId}`)
    }

    async createUser(user){
        return await this.post(`/users/${user}`)
    }

    //Role

    async roleById(idRole){
        return await this.get(`/role/${idRole}`)
    }

    async createRole(){
        return await this.post(`/role/`)
    }

};

module.exports = OutputAPI;
