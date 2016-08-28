var controllers = require('../controllers');
var express = require('express');

module.exports = function (router) {

	router.get('/', controllers.IndexController.getIndex);
}