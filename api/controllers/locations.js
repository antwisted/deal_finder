var mongoose = require('mongoose');
var Local = mongoose.model('Location');

var statReturn = function (res, stat, obj){
	res.status(stat);
	res.json(obj);
};

module.exports.getList = function (req, res){
	statReturn(res, 200, { "server" : "success" });
};

module.exports.getLocal = function (req, res){
	statReturn(res, 200, { "server" : "success" });
};

module.exports.addLocal = function (req, res){
	statReturn(res, 200, { "server" : "success" });
};

module.exports.updateLocal = function (req, res){
	statReturn(res, 200, { "server" : "success" });
};

module.exports.deleteLocal = function (req, res){
	statReturn(res, 200, { "server" : "success" });
};