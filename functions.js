people = [
    {
        "name" : "Tomas",
        "age": "30"
    },
    {
        "name": "Gabe",
        "age": "27"
    }
];


/**
 * get list of people
 */
getList = function ()
{
    return people;
};

/**
 * get person by name
 *
 * @param request
 * @returns {*}
 */
getPersonByName = function(name)
{
    var returnData = {};
    people.forEach(function(value){
        if(value.name == name)
            returnData = value;
    });

    return returnData;
};
