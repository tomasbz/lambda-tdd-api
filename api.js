require('./functions.js');
var ApiBuilder = require('claudia-api-builder');
var api = new ApiBuilder();

module.exports = api;

/**
 * get list
 * endpoint: /list
 */
api.get('/list', function (request) {
    return getList(request)
});

/**
 * get person by name
 */
api.get('/getPerson', function (request) {
    return getPersonByName(request.queryString.name);
});
