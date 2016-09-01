var controllers = require('../controllers');

module.exports = function (router) {
	// root
	router.get('/', controllers.IndexController.getIndex);

	// server type routes
	router.get('/server/types', controllers.ServerTypeController.All);
	router.get('/server/types/:id', controllers.ServerTypeController.ById);
	router.post('/server/types', controllers.ServerTypeController.Save);
	router.put('/server/types/:id', controllers.ServerTypeController.Update);
	router.delete('/server/types/:id', controllers.ServerTypeController.Delete);
}