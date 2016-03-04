/* Main Page */
module.exports.homeList = function (req, res){
	res.render('directory', { title: 'Deal Finder!' }); 
};

/* Specific Location Page */
module.exports.locationInfo = function (req, res){
	res.render('locationInfo', { title: 'Location Info' }); 
};

/* Add New Review Page */
module.exports.addReview = function (req, res){
	res.render('reviewForm', { title: 'Add Review' }); 
};