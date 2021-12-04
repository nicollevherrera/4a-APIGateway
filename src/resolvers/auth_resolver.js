const authResolvers = {
    Mutation: {
        LoginInput: async(_, { credentials }, { dataSources, usernameToken }) => {
            if (username == usernameToken) {
                return await dataSources.authAPI.authRequest(credentials);
            } else {
                return null
            }

        },
        SignUpInput: async(_, { SignUpData }, { dataSources }) => {
            const accountData = {
                name: SignUpData.name,
                lastname: SignUpData.lastname,
                typeid: SignUpData.typeid,
                numberid: SignUpData.numberid,
                email: SignUpData.email,
                phone: SignUpData.phone,
                birth: SignUpData.birth,
                country: SignUpData.country,
                password: SignUpData.password,
                role: SignUpData.role
            }
            await dataSources.userAPI.createUserRequest(accountData);
            const userData = {
                username: SignUpData.username,
                password: SignUpData.password,
                role: SignUpData.role
            }
            return await dataSources.authAPI.createUserRequest(userData);
        }
    }
}

module.exports = userResolvers;