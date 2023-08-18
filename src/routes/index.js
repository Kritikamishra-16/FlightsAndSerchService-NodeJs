const express= require('express');
const router= express.Router();
const v1ApiRoutes= require('./v1/index');

//whenever you get aroute that starts with /v1 map it to v1ApiRoutes
router.use('/v1', v1ApiRoutes);

module.exports= router;