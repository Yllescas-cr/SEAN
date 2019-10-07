var express = require('express');
var router = require('./routes');
var config = require('./config/env')


const { host, port } = config;
var app = express();


app.listen(port, host, () => {
    console.log("Servidor corriendo en " + host + ":" + port);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use(router);