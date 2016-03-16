var express = require('express');
var router = express.Router();
var locationsCtrl = require('../controllers/locations');
var reviewsCtrl = require('../controllers/reviews');
/* Main pages */
// router.get('/', mainController.index);

/* Location CRUD */
router.get('/location', locationsCtrl.getList);
router.post('/location', locationsCtrl.addLocal);
router.get('/location/:locationID', locationsCtrl.getLocal);
router.put('/location/:locationID', locationsCtrl.updateLocal);
router.delete('/location/:locationID', locationsCtrl.deleteLocal);

/* Review CRUD */
router.post('/location/:locationID/review', reviewsCtrl.addReview);
router.get('/location/:locationID/review/:reviewID', reviewsCtrl.getReview);
router.put('/location/:locationID/review/:reviewID', reviewsCtrl.updateReview);
router.delete('/location/:locationID/review/:reviewID', reviewsCtrl.deleteReview);

module.exports = router;
