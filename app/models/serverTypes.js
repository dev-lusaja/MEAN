var mongoose	= require('mongoose');
var Schema 		= mongoose.Schema;

var ServerTypeSchema = mongoose.Schema({
	description: String,
	createDate: Date,
});

module.exports = mongoose.model('serverTypes', ServerTypeSchema);