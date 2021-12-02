const authTypeDef = require('./auth_type_def');
const eventTypeDef = require('./event_type_def');
const roleTypeDef = require('./role_type_def');
const saleTypeDef = require('./sale_type_def');
const ticketTypeDef = require('./ticket_type_def');
const userTypeDef = require('./user_type_def');

const schemasArrays = [authTypeDef, eventTypeDef, roleTypeDef,saleTypeDef,ticketTypeDef, userTypeDef];

module.exports = schemasArrays;