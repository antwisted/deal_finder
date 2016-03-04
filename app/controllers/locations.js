var pry = require('pryjs');

/* Main Page */
module.exports.homeList = function (req, res){
	res.render('directory', {
		title: 'Deal Finder - Find a Local Deal Now!',
		header: {
			title: 'Deal Finder!',
			tagline: 'Find a deal in your neighborhood.'
		},
		sidebar: "Looking for a brunch place? Enjoy free wifi and complimentary perks at these locations! Happy Hours from 3pm to 9pm.",
		locations: [
			{
				name: "Ester's SmokeShack",
				address: "125 High Street, New York, 10001",
				rating: 3,
				attributes: ["BBQ", "Beer specials", "Premium Sports HD"],
				distance: "100m"
			},
			{
				name: "Dan's Place",
				address: "125 High Street, New York, 10001",
				rating: 3,
				attributes: ["Hot drinks", "Food", "Free wifi"],
				distance: "300m"
			},
			{
				name: "Jared's Jive",
				address: "747 Fly Court, New York, 10001",
				rating: 5,
				attributes: ["Live Music", "Rooftop Bar", "2 Floors"],
				distance: "550m"
			},
			{
				name: "Marina's Marina",
				address: "125 High Street, New York, 10001",
				rating: 4,
				attributes: ["Seafood", "Ocean View", "Prix Fixe"],
				distance: "600m"
			},
			{
				name: "Shawn's Dive Bar",
				address: "999 Push Avenue",
				rating: 4,
				attributes: ["Pool Table", "Skee Ball", "$2 Drafts"],
				distance: "700m"
			}
		]
	});
	// var testObj = {
	// 	title: 'Deal Finder - Find a local deal!',
	// 	header: {
	// 		title: 'Deal Finder!',
	// 		tagline: 'Find a deal in your neighborhood.'
	// 	},
	// 	locations: [
	// 		{
	// 			name: "Dan's Place",
	// 			address: "125 High Street, New York, 10001",
	// 			rating: 3,
	// 			attributes: ["Hot drinks", "Food", "Free wifi"],
	// 			distance: "300m"
	// 		},
	// 		{
	// 			name: "Ester's SmokeShack",
	// 			address: "125 High Street, New York, 10001",
	// 			rating: 3,
	// 			attributes: ["BBQ", "Beer specials", "Premium Sports HD"],
	// 			distance: "100m"
	// 		},
	// 		{
	// 			name: "Jared's Jive",
	// 			address: "747 Fly Court, New York, 10001",
	// 			rating: 5,
	// 			attributes: ["Live Music", "Rooftop Bar", "2 Floors"],
	// 			distance: "550m"
	// 		},
	// 		{
	// 			name: "Marina's Marina",
	// 			address: "125 High Street, New York, 10001",
	// 			rating: 4,
	// 			attributes: ["Seafood", "Ocean View", "Prix Fixe"],
	// 			distance: "600m"
	// 		},
	// 		{
	// 			name: "Shawn's Dive Bar",
	// 			address: "999 Push Avenue",
	// 			rating: 4,
	// 			attributes: ["Pool Table", "Skee Ball", "$2 Drafts"],
	// 			distance: "700m"
	// 		}
	// 	]
	// };
	// eval(pry.it);
};

/* Specific Location Page */
module.exports.locationInfo = function (req, res){
	res.render('locationInfo', {
		title: 'Deal Finder - Location Info',
		header: { title: "Dan's Place" }
	}); 
};

/* Add New Review Page */
module.exports.addReview = function (req, res){
	res.render('reviewForm', {
		title: 'Deal Finder - Add a Review',
		header: { title: "Review Dan's Place" }
	}); 
};