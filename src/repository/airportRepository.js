const CrudRepository= require('./crudRepository');
const {Airport} = require('../models/index');

class AirportRepository extends CrudRepository {
    constructor(){
        super(Airport);
    }
}

module.exports= AirportRepository;