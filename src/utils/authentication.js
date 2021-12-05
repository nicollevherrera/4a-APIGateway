const fetch = require('node-fetch');
const serverConfig = require('../server');
const { ApolloError } = require('apollo-server');

const authentication = async ({ req }) => {
    const token = req.header.authorization || '';
    if(token == ''){
        return {usernameToken: null}
    }else{
        try{
            let requestOptions ={
                method: 'GET',
                header: {
                    "Content-Type": "applicatio/json",
                    "Authorization": "token" + token
                },
                redirect: 'follow'
            };
            let response = await fetch(`${serverConfig.users_api_url}rest-auth/login/`, requestOptions);
            if(response.status != 200){
                console.log("Fallo", response)
                throw new ApolloError("Inactive session - 401", 401);
            }
            return { usernameToken: response.json().username}
        } catch(error){
            console.log("Failed", error)
            throw new ApolloError ("Unknow Error", 500);
        };
    }
}

module.exports = authentication;
