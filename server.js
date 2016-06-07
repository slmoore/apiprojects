'use strict';

/*

-this is the "main" application file (see package.json config)
-it is started by the package.json "start" script
-initiates all frameworks, configuration, application logic

/app - application logic
/app/common - 
/app/config - 
/app/controllers - 
/app/models - database changes
/app/routes - http requests and responses

/node_modules - application dependencies (e.g. frameworks)

/public - views

*/


var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');

//create express application and configuration
var app = express();
require('dotenv').load();
require('./app/config/passport')(passport);
//connect to database
mongoose.connect(process.env.MONGO_URI);
//middleware methods
//static files served, mounted on controllers, public, common paths
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));
//
app.use(session({
	secret: 'secretClementine',
	resave: false,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app, passport);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});