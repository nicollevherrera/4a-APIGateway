const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const authentication = require('./utils/authentication');
const OutputAPI = require('./dataSources/output_api');
const UsersAPI = require('./dataSources/users_api');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        outputAPI: new OutputAPI(),
        usersAPI: new UsersAPI(),
    }),
    introspection: true,
    playground: true
});

server.listen(process.env.PORT || 4000).then(({ url}) => {
    console.log(`👍 It's alive: ${url}`);
});
