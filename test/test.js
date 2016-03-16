var functions = require('../functions.js');
var assert = require('assert');

/**
 * is equal JSON
 */
describe('list', function()
{
    it('should have the same array values', function(){
        assert.deepEqual(functions.people, functions.getList());
    });
});

/**
 * is equal
 */
describe('getPersonByName', function()
{
    it('should be equal', function(){
        assert.deepEqual(functions.people[0],functions.getPersonByName("Tomas"));
    });
});
