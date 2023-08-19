const express= require('express');
const CityController= require('../../controllers/cityController');
const router= express.Router();

router.post('/city',CityController.create);
router.get('/city/:id',CityController.get);
router.get('/city', CityController.getAll);
router.delete('/city/:id', CityController.destroy);
router.patch('/city/:id', CityController.update);

module.exports=router;