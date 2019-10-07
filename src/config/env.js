"use strict";

const assert = require( "assert" );
const dotenv = require( "dotenv" );

// read in the .env file
dotenv.config();

// capture the environment variables the application needs


const { 
   PORT,
   HOST,
   HOST_URL,
   COOKIE_ENCRYPT_PWD,
   SQL_SERVER,
   SQL_DATABASE,
   SQL_USER,
   SQL_PASSWORD,
   SQL_TYPE,
   SQL_INSTANCE
} = process.env;



const sqlEncrypt = process.env.SQL_ENCRYPT === "true";
const sqlRow = process.env.SQL_ROWC === "true";
const sqlColum = process.env.SQL_COLUMN === "true";

// validate the required configuration information
assert( PORT, "PORT configuration is required." );
assert( HOST, "HOST configuration is required." );
assert( HOST_URL, "HOST_URL configuration is required." );
assert( COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD configuration is required." );
assert( SQL_SERVER, "SQL_SERVER configuration is required." );
assert( SQL_DATABASE, "SQL_DATABASE configuration is required." );
assert( SQL_USER, "SQL_USER configuration is required." );
assert( SQL_PASSWORD, "SQL_PASSWORD configuration is required." );


// export the configuration information
module.exports = {
   port: PORT,
   host: HOST,
   url: HOST_URL,
   cookiePwd: COOKIE_ENCRYPT_PWD,
   sql: {
       server: SQL_SERVER,
       authentication:{
           type: SQL_TYPE,
           options:{
            userName: SQL_USER,
            password: SQL_PASSWORD,
           }
       },     
       options: {
        database: SQL_DATABASE,
        instanceName: SQL_INSTANCE,
        rowCollectionOnDone: sqlRow,
        useColumnNames: sqlColum,
           encrypt: sqlEncrypt
       }
   }
};
