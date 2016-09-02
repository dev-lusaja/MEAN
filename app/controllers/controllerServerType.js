var config 		= require('../configs');
var ServerTypes = require('../models/serverTypes');

// Return all server types
exports.All = function(req, res) {
	ServerTypes.find(function(err, servertypes) {
		if (err) {
			res.status(config.errorCode).json({error: err.message});
		} else {
			res.status(config.okCode).json({message: servertypes});
		}
	});
};

// Return a server type by id
exports.ById = function(req, res) {
	ServerTypes.findById(req.params.id ,function(err, servertype) {
		if (err) {
			res.status(config.errorCode).json({error: err.message});
		} else {
			res.status(config.okCode).json({message: servertype});
		}
	});
};

// Save a server type
exports.Save = function(req, res) {
	var serverTypes = new ServerTypes;
	var created = new Date();
	console.log(created);
	serverTypes.name = req.body.name;
	serverTypes.created = created;
	serverTypes.status = true;

	serverTypes.save(function(err) {
		if (err) {
			res.status(config.errorCode).json({error: err.message});
		} else {
			res.status(config.okCode).json({message: 'Server type created!'});
		}
	});
};

// Update a server type
exports.Update = function(req, res) {
	ServerTypes.findById(req.params.id, function(err, servertype) {
		if (err) {
			res.status(config.errorCode).json({error: err.message});
		} else {
			if(typeof req.body.name === 'undefined') {
				servertype.name = req.body.name;
			}
			servertype.save(function(err) {
				if (err) {
					res.status(config.errorCode).json({error: err.message});
				} else {
					res.status(config.okCode).json({message: 'Server type updated!'});
				}
			});			
		}
	});
}

// Delete a server type
exports.Delete = function(req, res) {
	ServerTypes.remove({_id: req.params.id}, function(err, servertypes) {
		if (err) {
			res.status(config.errorCode).json({error: err.message});
		} else {
			res.status(config.okCode).json({message: 'Server type removed!'});
		}
	});
}