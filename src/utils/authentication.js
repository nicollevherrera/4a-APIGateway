const { method } = require('lodash');
const fetch = require('node-fetch');
const serverConfig = require('../server');

const authentication = async ({req} => {
    const token = req.header.authorization || '';
    if(token == ''){
        return {usernameToken: null}
    }else{
        let requestOptions ={
            method: 'GET',
            header: {
                "Authorization": "token" + token
            },
            redirect: 'follow'
        }
        let response = await fetch{`${serverConfig.auth_api_url}/soporte/user/`, requestOptions}
        if(response.status != 200){
            console.log("Failed", response)
            throw new ApolloError('SESION INACTIVA', 401)
        }
        return {usernameToken: response.json().username}
    }
    
})