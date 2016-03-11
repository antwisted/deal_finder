var mongoose = require('mongoose');

// Subdocument - Open hours
var subHoursSchema = new mongoose.Schema({
	days: {type: String, required: true},
	opening: String,
	closing: String,
	closed: {type: Boolean, required: true}
});

// Subdocument - Reviews
var subReviewsSchema = new mongoose.Schema({
	rating: {type: Number, required: true, min: 0, max: 5},
	author: String,
	timestamp: {type: Date, "default": Date.now},
	body: String
}); 

// Document - Location details
var locationSchema = new mongoose.Schema({
	name: {type: String, required: true},
	address: String,
	// Quotes are in place because 'default' is a reserved JavaScript word
	rating: {type: Number, "default": 0, min: 0, max: 5}, 
	attributes: [String],
	// Mongoose GeoJSON abstraction
	coordinates: {type: [Number], index: '2dsphere'},
	openHours: [subHoursSchema],
	reviews: [subReviewsSchema]
});

mongoose.model('Location', locationSchema);