const { RESTDataSource } = require("apollo-datasource-rest");
const server = require ('../server')
const serverConfig = require('../server');

class UsersAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.users_api_url;
    }

    async authRequest(credentials){
        return await this.post('/rest-auth/login', credentials)
    }
}

modules.export = UsersAPI;