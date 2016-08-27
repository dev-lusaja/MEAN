var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router =express.Router();

router.get('/', function(req, res) {
	res.send('Hola mundo');
})

app.use(router);

app.listen(3000, function() {
	console.log("server corriendo");
});