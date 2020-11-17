// external packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const router = require('./route.js')

// Start the webapp
const App = express();
App.use(cors());

// App.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });

// Webapp settings
App.use(bodyParser.urlencoded({
    extended: true
}));
App.use(bodyParser.json());

// Server Port
const PORT = process.env.PORT || 8000;

// Home route

App.use("/", router);


//Route for WhatsApp
// 

// Start the server
App.listen(PORT, () => console.log(`Server is up and running at ${PORT}`));