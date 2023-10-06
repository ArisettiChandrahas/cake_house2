var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/cakes');
var ctrlReviews = require('../controllers/reviews');


router.post('/cakes', ctrlLocations.cakesCreate);
router.get('/cakes/:locationid', ctrlLocations.cakesReadOne);

router.put('/cakes/:locationid', ctrlLocations.cakesUpdateOne);
router.delete('/cakes/:locationid', ctrlLocations.cakesDeleteOne);

// reviews
router.post('/menu/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/menu/:locationid/reviews/:reviewid',ctrlReviews.reviewsReadOne);


router.put('/menu/:locationid/reviews/:reviewid',ctrlReviews.reviewsUpdateOne);
router.delete('/menu/:locationid/reviews/:reviewid',ctrlReviews.reviewsDeleteOne);


module.exports = router;