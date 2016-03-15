require('../functions.js');
var assert = require('assert');

/**
 * is equal JSON
 */
describe('list', function()
{
    it('should have the same array values', function(){
        assert.deepEqual(people, getList());
    });
});

/**
 * is equal
 */
describe('list', function()
{
    it('should be equal', function(){
        assert.deepEqual(people[0], getPersonByName("Tomas"));
    });
});
