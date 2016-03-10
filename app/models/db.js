// Require Mongoose for MongoDB
var mongoose = require('mongoose');

// Estbablish database connection
var dealDB = 'mongodb://localhost/deal_finder'
mongoose.connect(dealDB);

// Monitor for successful connection on Mongoose
mongoose.connection.on('connected', function (){
	console.log('Mongoose connected to ' + dealDB);
})

// Monitor for connection errors
mongoose.connection.on('error', function (err){
	console.log('Mongoose connection error: ' + err);
});

// Monitor for disconneciton event
mongoose.connection.on('disconnected', function (){
	console.log('Mongoose disconnected');
})

// Mongo 'Graceful Shutdown' function
var dbShutdown = function (msg, callback){
	mongoose.connection.close(function (){
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

// Termination Event Listener - Nodemon
process.once('SIGUSR2', function(){
	dbShutdown('Nodemon restart', function (){
		process.kill(process.pid, 'SIGUSR2');
	});
});

// Termination Event Listener - OSX/Unix
process.on('SIGINT', function(){
	dbShutdown('App termination', function (){
		process.exit(0);
	});
});

// Termination Event Listener - Heroku
process.on('SIGTERM', function(){
	dbShutdown('Heroku app shutdown', function (){
		process.exit(0);
	});
});

require('./locationsModel');
