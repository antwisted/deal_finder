var express = require('express');
var router = express.Router();
// var layoutController = require('../controllers/layout');
var locationsController = require('../controllers/locations');
var miscController = require('../controllers/misc');

/* Main pages */
// router.get('/', mainController.index);

/* Location pages */
router.get('/', locationsController.homeList);
router.get('/location', locationsController.locationInfo);
router.get('/location/review/new', locationsController.addReview);

/* Miscellaneous */
router.get('/about', miscController.about);

module.exports = router;
