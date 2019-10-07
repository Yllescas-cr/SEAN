var Request = require('tedious').Request;
var connection = require('./connect');
var utility = require('./utility/utility');

function queryGetExecute(qry, params, isMultiSet, callback) {
    var data = [];
    var dataset = [];
 
    request = new Request(qry, function (err, rowCount) {
        utility.sendDbResponse(err, rowCount, dataset, callback);
    });

    params.forEach(param => {
        request.addParameter(param.name, param.type, param.val);
    });

    request.on('row', function (columns) {
        utility.buildRow(columns, data);
    });

    request.on('doneInProc',() =>{
        if (isMultiSet == false) {
            dataset = data;
        } else {
            dataset.push(data);
            data = [];
        }
    });

    connection.execSql(request);
}


module.exports = {
    getQuery: queryGetExecute
};