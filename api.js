var person = require('./src/person.js');
var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();

module.exports = api;

/**
 * get list
 * endpoint: /list
 */
api.get('/list', function (request) {
    return person.getList(request);
});

/**
 * get person by name
 * endpoint: /getPerson
 */
api.get('/getPerson', function (request) {
    return person.getPersonByName(request.queryString.name);
});
