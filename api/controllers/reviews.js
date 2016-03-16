var router
var mongoose = require('mongoose');
var Review = mongoose.model('Location');

var statReturn = function (res, stat, obj){
	res.status(stat);
	res.json(obj);
};

module.exports.getReview = function (req, res){
	statReturn(res, 200, { "server" : "success" });
};

module.exports.addReview = function (req, res){
	statReturn(res, 200, { "server" : "success" });
};

module.exports.updateReview = function (req, res){
	statReturn(res, 200, { "server" : "success" });
};

module.exports.deleteReview = function (req, res){
	statReturn(res, 200, { "server" : "success" });
};