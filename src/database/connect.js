var Connection = require('tedious').Connection;
var config = require ('../config/env')

const { sql } = config;
var connection = new Connection(sql);

connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Se establecio la conexón a la base de datos');
    }
});

module.exports = connection;
