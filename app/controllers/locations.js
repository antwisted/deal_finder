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
};

/* Specific Location Page */
module.exports.locationInfo = function (req, res){
	res.render('locationInfo', {
		title: 'Deal Finder - Location Info',
		location: {
			header: "Dan's Place",
			rating: "3",
			address: "125 High Street, New York, 10001",
			hours: [
				{
					days: "Monday - Friday",
					hours: "7:00am - 7:00pm",
					closed: false
				},
				{
					days: "Saturday",
					hours: "8:00am - 5:00pm",
					closed: false
				},
				{
					days: "Sunday",
					closed: true
				}
			],
			attributes: ["Hot drinks", "Food", "Premium wifi"],
			cord1: "51.455041",
			cord2: "-0.9690884"
		},
		reviews: [
			{
				rating: 4,
				author: "Philly B.",
				timestamp: "February 03 2016",
				body: "It was fine, but coffee was a bit dull. Nice atmosphere."
			},
			{
				rating: 3,
				author: "Tom B.",
				timestamp: "February 03 2016",
				body: "I asked for her number. She said no."
			}
		],
		sidebar: {
			one: "Dan's place is on Deal Finder because it has a get $50 for $25 offer.\n",
			two: "If you've been and you like it - or if you don't - please leave a review to help other people just like you.\n"
		}
	});
};

/* Add New Review Page */
module.exports.addReview = function (req, res){
	res.render('reviewForm', {
		title: 'Deal Finder - Add a Review',
		header: { title: "Review Dan's Place" }
	}); 
};