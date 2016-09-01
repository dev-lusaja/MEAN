var controllers = require('../controllers');

module.exports = function (router) {
	// root
	router.get('/', controllers.IndexController.getIndex);

	// server type collection
	router.get('/server/types', controllers.ServerTypeController.All);
	router.get('/server/types/:serverTypeId', controllers.ServerTypeController.ById);
	router.post('/server/types', controllers.ServerTypeController.Save);
}