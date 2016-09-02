var mongoose	= require('mongoose');
var Schema 		= mongoose.Schema;

var ServerTypeSchema = mongoose.Schema({
	name: String,
	created: Date,
	status: Boolean,
});

module.exports = mongoose.model('serverTypes', ServerTypeSchema);