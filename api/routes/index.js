var express = require('express');
var router = express.Router();
var locationsCtrl = require('../controllers/locations');
var reviewsCtrl = require('../controllers/reviews');
/* Main pages */
// router.get('/', mainController.index);

/* Location CRUD */
router.get('/location', locationsCtlr.getList);
router.post('/location', locationsCtlr.addLocal);
router.get('/location/:locationID', locationsCtlr.getLocal);
router.put('/location/:locationID', locationsCtlr.updateLocal);
router.delete('/location/:locationID', locationsCtlr.deletLocal);


/* Review CRUD */
router.post('/location/:locationID/review', reviewsCtlr.addReview);
router.get('/location/:locationID/review/:reviewID', reviewsCtlr.getReview);
router.put('/location/:locationID/review/:reviewID', reviewsCtlr.updateReview);
router.delete('/location/:locationID/review/:reviewID', reviewsCtlr.deleteReview);

module.exports = router;
