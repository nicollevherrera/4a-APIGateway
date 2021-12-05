const authResolver = {

    Mutation: {
        logIn: async(_, { credentials }, { dataSources }) => { 
                return await dataSources.authAPI.authRequest(credentials);
            
        },

        signUp: async(_, { signUpData }, { dataSources }) => {

            const accountData = {
                name: signUpData.name,
                lastname: signUpData.lastname,
                typeid: signUpData.typeid,
                numberid: signUpData.numberid,
                email: signUpData.email,
                phone: signUpData.phone,
                birth: signUpData.birth,
                country: signUpData.country,
                password: signUpData.password,
                role: signUpData.role
            }
            await dataSources.userAPI.createAccountRequest(accountData);

            const userData = {
                username: signUpData.username,
                password: signUpData.password,
                role: signUpData.role
            }
            return await dataSources.authAPI.createUserRequest(userData);
        }
    }
}

module.exports = authResolver;