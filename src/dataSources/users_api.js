const { RESTDataSource } = require("apollo-datasource-rest");
const server = require ('../server')
const serverConfig = require('../server');

class UsersAPI extends RESTDataSource{
    constructor(){
        super();
        this.baseURL = serverConfig.users_api_url;
    };

    async authRequest(logInData){
        return await this.post('rest-auth/login/', logInData)
    };

    async createUserRequest(users){
        return await this.post('rest-auth/registration/', users)
    };


    //users

    async userById(id){
        return await this.get(`see-user/user/${id}/`)
    }

    async createUser(User){
        return await this.post(`see-user/user/`,User)
    }

    //Role query

    async roleById(id){
        return await this.get(`see-user/role/${id}/`)
    }

    //Role mutation

    async createRole(Role){
        //Role = new Object(JSON.parse(JSON.stringify(Role)))
        return await this.post(`see-user/roles/`, Role)
    }

};

module.exports = UsersAPI;