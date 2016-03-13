var seeder = require('mongoose-seed');
 
// Connect to MongoDB via Mongoose 
seeder.connect('mongodb://localhost/deal_finder', function() {
	
	// Load Mongoose models 
	seeder.loadModels([
		'app/models/locationsModel.js'
	]);
 
	// Clear specified collections 
	seeder.clearModels(['Location'], function() {
 
		// Callback to populate DB once collections have been cleared 
		seeder.populateModels(data);
 
	});
});

var data = [
	{
		"model": "Location",
		"documents": [
			{
				"header": "Ester's SmokeShack",
				"rating": 3,
				"address": "789 Woods Lane, New York, 10001",
				"cord1": -73.0812,
				"cord2": 40.8732,
				"attributes": ["BBQ", "Beer specials", "Premium Sports HD"],
				"hours": [
					{
						"days": "Monday - Friday",
						"hours": "7:00am - 7:00pm",
						"closed": false
					},
					{
						"days": "Saturday",
						"hours": "8:00am - 5:00pm",
						"closed": false
					},
					{
						"days": "Sunday",
						"closed": true
					}
				],
				"reviews": [
					{
						"rating": 4,
						"id": "ObjectId()",
						"author": "Billy D.",
						"timestamp": "new Date('Feb 3, 2016')",
						"body": "Beer specials were too short. Great ribs though!"
					},
					{
						"rating": 5,
						"id": "ObjectId()",
						"author": "Tom B.",
						"timestamp": "new Date('Feb 23, 2016')",
						"body": "I asked her to change the channel. She said no."
					}
				]
			},
			{
				"header": "Dan's Place",
				"rating": 3,
				"address": "125 High Street, New York, 10001",
				"cord1": -73.0812,
				"cord2": 40.8732,
				"attributes": ["Hot drinks", "Food", "Premium wifi"],
				"hours": [
					{
						"days": "Monday - Friday",
						"hours": "7:00am - 7:00pm",
						"closed": false
					},
					{
						"days": "Saturday",
						"hours": "8:00am - 5:00pm",
						"closed": false
					},
					{
						"days": "Sunday",
						"closed": true
					}
				],
				"reviews": [
					{
						"rating": 4,
						"id": "ObjectId()",
						"author": "Philly B.",
						"timestamp": "new Date('Feb 3, 2016')",
						"body": "It was fine, but coffee was a bit dull. Nice atmosphere."
					},
					{
						"rating": 3,
						"id": "ObjectId()",
						"author": "Tom B.",
						"timestamp": "new Date('Feb 23, 2016')",
						"body": "I asked for her number. She said no."
					}
				]
			},
			{
				"header": "Jared's Jive",
				"rating": 5,
				"address": "747 Fly Court, New York, 10001",
				"cord1": -73.0812,
				"cord2": 40.8732,
				"attributes": ["Live Music", "Rooftop Bar", "2 Floors"],
				"hours": [
					{
						"days": "Monday - Friday",
						"hours": "7:00am - 7:00pm",
						"closed": false
					},
					{
						"days": "Saturday",
						"hours": "8:00am - 5:00pm",
						"closed": false
					},
					{
						"days": "Sunday",
						"closed": true
					}
				],
				"reviews": [
					{
						"rating": 5,
						"id": "ObjectId()",
						"author": "Jacob G.",
						"timestamp": "new Date('Feb 3, 2016')",
						"body": "Whoa! The music here is wicked good. Definitely going again."
					},
					{
						"rating": 4,
						"id": "ObjectId()",
						"author": "Tom B.",
						"timestamp": "new Date('Feb 23, 2016')",
						"body": "I asked to play her a tune. She said no."
					}
				]
			},
			{
				"header": "Marina's Marina",
				"rating": 4,
				"address": "456 Jump Boulevard, New York, 10001",
				"cord1": -73.0812,
				"cord2": 40.8732,
				"attributes": ["Seafood", "Ocean View", "Prix Fixe"],
				"hours": [{
						"days": "Monday - Friday",
						"hours": "7:00am - 7:00pm",
						"closed": false
					},
					{
						"days": "Saturday",
						"hours": "8:00am - 5:00pm",
						"closed": false
					},
					{
						"days": "Sunday",
						"closed": true
					}
				],
				"reviews": [
					{
						"rating": 4,
						"id": "ObjectId()",
						"author": "Dante Z.",
						"timestamp": "new Date('Feb 3, 2016')",
						"body": "I had the clam, the lobster, and the flounder. They were all delish."
					},
					{
						"rating": 5,
						"id": "ObjectId()",
						"author": "Tom B.",
						"timestamp": "new Date('Feb 23, 2016')",
						"body": "I asked for her address. She said no."
					}
				]
			},
			{
				"header": "Shawn's Dive Bar",
				"rating": 4,
				"address": "999 Push Avenue, New York, 10001",
				"cord1": -73.0812,
				"cord2": 40.8732,
				"attributes": ["Pool Table", "Skee Ball", "$2 Drafts"],
				"hours": [
					{
						"days": "Monday - Friday",
						"hours": "7:00am - 7:00pm",
						"closed": false
					},
					{
						"days": "Saturday",
						"hours": "8:00am - 5:00pm",
						"closed": false
					},
					{
						"days": "Sunday",
						"closed": true
					}
				],
				"reviews": [
					{
						"rating": 5,
						"id": "ObjectId()",
						"author": "Bryan M.",
						"timestamp": "new Date('Feb 3, 2016')",
						"body": "Someone tried to start a fight, but I immediately stared both of them down. I look like Chuck Norris."
					},
					{
						"rating": 4,
						"id": "ObjectId()",
						"author": "Tom B.",
						"timestamp": "new Date('Feb 23, 2016')",
						"body": "I asked her if I look like Chuck Norris. She said no."
					}
				]
			}	
		]
	}
];