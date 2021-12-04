const { RESTDataSource } = require("apollo-datasource-rest");
const serverConfig = require('../server');

class UsersAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.users_api_url;
    }

    async accountByUsername(user){
        return await this.get(`/user/${user}`);
    }

    async accountByRole(role){
        return await this.get(`/role/${role}`);
    }
}

modules.export = UsersAPI;