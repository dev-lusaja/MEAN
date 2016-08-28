var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var config = require('./configs');
require('./routes/routes')(router);

app.use(router);

app.listen(config.port, function() {
	console.log("Listen server on port: " + config.port);
});