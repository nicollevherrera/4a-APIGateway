const userResolver = require("./user_resolver");
const authResolver = require("./auth_resolver");
const eventResolver = require('./event_resolver');
const saleResolver = require('./sale_resolver');
const ticketResolver = require("./ticket_resolver");

const lodash = require('lodash');

const resolvers = lodash.merge(userResolver, authResolver, eventResolver, saleResolver, ticketResolver);

module.exports = resolvers;