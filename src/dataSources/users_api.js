const { RESTDataSource } = require("apollo-datasource-rest");
const server = require ('../server')
const serverConfig = require('../server');

class UsersAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.users_api_url;
    };

    async authRequest(credentials){
        return await this.post('/rest-auth/login', credentials)
    };

    async createUserRequest(user){
        return await this.post('/rest-auth/registration', user)
    };


    //users

    async userById(id){
        return await this.get(`see-user/user/${id}/`)
    }

    async createUser(user){
        return await this.post(`see-user/user/`,user)
    }

    //Role

    async roleById(id){
        return await this.get(`see-user/role/${id}/`)
    }

    async createRole(role){
        return await this.post(`see-user/roles/`, role)
    }

};

module.exports = UsersAPI;