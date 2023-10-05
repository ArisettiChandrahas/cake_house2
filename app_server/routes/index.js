require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlLocations=require('../controllers/locations');
var ctrlOthers=require('../controllers/others');


/* Locations page*/
router.get('/',ctrlLocations.homelist);
router.get('/menu',ctrlOthers.menu);
router.get('/menu/review/new',ctrlOthers.addReview);
/* others page*/
router.get('/about', ctrlOthers.about);
router.get('/signin', ctrlOthers.signin);

router.get('/register', ctrlOthers.register);

module.exports = router;
