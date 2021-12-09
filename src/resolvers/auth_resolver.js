const authResolver = {

    Mutation: {
        logIn: async(_, { logInData }, { dataSources }) => { 
                return await dataSources.usersAPI.authRequest(logInData);
            
        },

        signUp: async(_, { signUpData }, { dataSources }) => {

            const authData = {
                username: signUpData.username,
                password1: signUpData.password1,
                password2: signUpData.password2,
            }
            await dataSources.usersAPI.createAccountRequest(authData);

            const usersData = {
                name: signUpData.name,
                lastname: signUpData.lastname,
                typeid: signUpData.typeid,
                numberid: signUpData.numberid,
                email: signUpData.email,
                phone: signUpData.phone,
                birth: signUpData.birth,
                country: signUpData.country,
                city: signUpData.city,
                password: signUpData.password,
                role: signUpData.role
            }
            return await dataSources.usersAPI.createUser(usersData);
        }
    }
}

module.exports = authResolver;