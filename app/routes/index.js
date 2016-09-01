var controllers = require('../controllers');

module.exports = function (router) {
	// root
	router.get('/', controllers.IndexController.getIndex);

	// server type collection
	router.get('/server/types', controllers.ServerController.AllServerTypes);
	router.get('/server/types/:serverTypeId', controllers.ServerController.ServerType);
	router.post('/server/types', controllers.ServerController.SaveServerTypes);
}