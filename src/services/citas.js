
var response = require('../config/response');
var TYPES = require('tedious').TYPES;

function citasServices(dbContext) {


     getCitas = (req, res) =>{

       
            var parameters = [];

            parameters.push({ name: 'Citas', type: TYPES.Int});

            var query = "select * from citas"

            dbContext.getQuery(query, parameters, false, function (error, data) {
                return res.json(response(data, error));
            });
        }
    











    return {
        getAll: getCitas,

    }
}

module.exports = citasServices;