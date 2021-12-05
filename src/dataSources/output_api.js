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

    async eventById(idevent){
        return await this.get(`/event/${idevent}`);
    };

    async eventsByOrganizer(organizer){
        return await this.get(`/event/${organizer}`)
    }

    async eventByName(nameEvent){
        return await this.get(`/event/${nameEvent}`)
    };

    //Mutation Event

    async createEvent(event){
        return await this.post('/event', event);
    };

    async infoEventName(infoEventNameData){
        return await this.get(`/events/${infoEventNameData.name}`);
    };

    async infoEventOrganizer(infoEventOrganizerData){
        return await this.get(`/event/${infoEventOrganizerData.organizer}`);
    };

    //users

    async userById(id){
        return await this.get(`see-user/user/${id}`)
    }

    async createUser(user){
        return await this.post(`see-user/user/`,user)
    }

    //Role

    async roleById(id){
        return await this.get(`see-user/role/${id}`)
    }

    async createRole(role){
        return await this.post(`see-user/role/`, role)
    }

};

module.exports = OutputAPI;
