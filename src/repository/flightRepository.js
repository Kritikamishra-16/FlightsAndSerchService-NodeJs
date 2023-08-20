const {Flights}=require('../models/index');
const {Op} = require('sequelize');

class FlightRepository{

    //private member functions
    #createFilter(data){ 
        let filter={};
        if(data.arrivalAirportId)
        {
            filter.arrivalAirportId= data.arrivalAirportId;
        }
        if(data.departureAirportId)
        {
            filter.departureAirportId= data.departureAirportId;
        }
        let priceFilter=[];
        if(data.minPrice)
        {
            //Object.assign(filter, { price: {[Op.gte]: data.minPrice} } );
            priceFilter.push({price: {[Op.gte]: data.minPrice} });
        }
        if(data.maxPrice)
        {
            //Object.assign(filter, {price: {[Op.get]: data.maxPrice}} );
            priceFilter.push({price: {[Op.lte]: data.maxPrice} });
        }
        Object.assign(filter,{[Op.and] : priceFilter});
        //Object.assign(filter, {[Op.and] : [ { price: {[Op.lte]:7000} }, { price: {[Op.gte]: 4000} } ] });
        return filter;
    }

    async createFlight(data){
        try{
            const flight= await Flights.create(data);
            return flight;
        }catch(error){
            console.log('Something is wrong in the repository layer');
            throw {error};
        }
    }

    async getFlight(flightId){
        try{
            const flight= await Flights.findByPk(flightId);
            return flight;
        }catch(error){
            console.log('Something is wrong in the repository layer');
            throw {error};
        }
    }

    async getAllFlights(filters){
        try{
            const filterObject= this.#createFilter(filters);
            const flight= await Flights.findAll({
                where:filterObject
            });
            return flight;
        }catch(error){
            console.log('Something is wrong in the repository layer');
            throw {error};
        }
    }


}

module.exports=FlightRepository;

/*
{
    where:filterObject
} 
=
{
    where: {
        arrivalAirportId: 2,
        departureAirportId: 4,
        Price :{
            [Op.gte]:4000
        },
        [Op.and] : [ 
            { price: {[Op.lte]:7000} }, 
            { price: {[Op.gte]: 4000} }
        ]    
    }
}
 */