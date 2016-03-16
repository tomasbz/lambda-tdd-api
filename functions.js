module.exports = {

    people: [
        {
            "name" : "Tomas",
            "age": "30"
        },
        {
            "name": "Gabe",
            "age": "27"
        }
    ],

    /**
     * get people list
     */
    getList: function ()
    {
        return this.people;
    },

    /**
     * get person by name
     * @param name
     */
    getPersonByName: function(name)
    {
        var returnData = {};
        this.people.forEach(function(value){
            if(value.name == name)
                returnData = value;
        });

        return returnData;
    }

};