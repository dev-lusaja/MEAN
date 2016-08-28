var express = require('express');

exports.getIndex = function(req, res) {
	res.send("Hello world!");
}