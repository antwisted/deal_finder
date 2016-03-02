var express = require('express');
var router = express.Router();
var cMain = require('../controllers/main');

/* GET home page. */
router.get('/', cMain.index);

module.exports = router;
