'use strict';

/*

-this is the "main" application file (see package.json config)
-it is started by the package.json "start" script
npm start (or node server.js)
-initiates all frameworks, configuration, application logic

/app - application logic
/app/common - ajax
/app/config - additional configuration
/app/controllers - event handlers
/app/models - database changes
/app/routes - http requests and responses
/node_modules - application dependencies (e.g. express)
/public - views

Removed or commented out all non-essential initializations

*/


var express = require('express');
var routes = require('./app/routes/index.js');

//databse unnecessary for this application
//var mongoose = require('mongoose');
var passport = require('passport');

//create express application and configuration
var app = express();
require('dotenv').load();
app.use('/public', express.static(process.cwd() + '/public'));
routes(app, passport);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});