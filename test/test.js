var expected = require('../test/expectedData/expected.json');
var test = require('../test/testData/test.json');
var person = require('../src/person.js');
var assert = require('assert');

/**
 * is equal JSON
 */
describe('list', function()
{
    it('should have the same array values', function(){
        assert.deepEqual(expected.getList, person.getList());
    });
});

/**
 * is equal
 */
describe('getPersonByName', function()
{
    it('should be equal', function(){
        assert.deepEqual(expected.getPersonByName, person.getPersonByName(test.getPersonByName));
    });
});
