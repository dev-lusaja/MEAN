var express 		= require('express');
var bodyParser 		= require('body-parser');
var mongoose		= require('mongoose');

var config 			= require('./configs');

var app 			= express();
var router 			= express.Router();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

require('./middlewares')(router);
require('./routes')(router);

app.use(config.apiPrefix, router);

mongoose.connect(config.dbUri, function(err, res) {
	if (err) { 
		console.log('DB connect error: ' + err.message); 
	} else {
		app.listen(config.port, function() {
		console.log('Server listen on port: ' + config.port);
		});
	}
});