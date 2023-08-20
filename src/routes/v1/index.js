const express= require('express');
const CityController= require('../../controllers/cityController');
const flightController= require('../../controllers/flightController');
const airportController= require('../../controllers/airportController');
const {FlightMiddlewares}= require('../../middlewares/index');
const router= express.Router();

router.post('/city',CityController.create);
router.get('/city/:id',CityController.get);
router.get('/city', CityController.getAll);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);

router.post('/flights',FlightMiddlewares.validateCreateFlight, flightController.create);
router.get('/flights', flightController.getAll);

router.post('/airports', airportController.create);

module.exports=router;