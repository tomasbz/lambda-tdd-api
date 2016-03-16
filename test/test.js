var person = require('../src/person.js');
var assert = require('assert');

/**
 * is equal JSON
 */
describe('list', function()
{
    it('should have the same array values', function(){
        assert.deepEqual(person.people, person.getList());
    });
});

/**
 * is equal
 */
describe('getPersonByName', function()
{
    it('should be equal', function(){
        assert.deepEqual(person.people[0], person.getPersonByName("Tomas"));
    });
});
