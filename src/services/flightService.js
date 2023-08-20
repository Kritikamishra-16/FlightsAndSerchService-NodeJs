const {FlightRepository, AirplaneRepository}= require('../repository/index');
const {compareTime}= require('../utils/helper');

class FlightService{
    constructor(){
        this.airplaneRepository= new AirplaneRepository();
        this.flightRepository= new FlightRepository();
    }

    async createFlight(data){
        try{
            const airplane= await this.airplaneRepository.getAirplane(data.airplane_id);
            if(!compareTime(data.departureTime,data.arrivalTime))
            {
                throw {error: 'Arrival time cannot be less than departure time'};
            }
            const flight= await  this.flightRepository.createFlight({...data, totalSeats:airplane.capacity}); 
            return flight;
        }catch(error){
            console.log("Something went wrong at Service layer");
            throw {error};
        }
    }

    async getAllFlightData(filters){
        try{
            const flights= await this.flightRepository.getAllFlights(filters);
            return flights;
        }catch(error){
            console.log("Something went wrong at Service layer");
            throw {error};
        }
    }
}

module.exports=FlightService;

/**
 * data-> 
 * {
 *     flightNumber,
 *     airplane_id,
 *      departureAirportId,
 *      arrivalAirportId,
 *      arrivalTime,
 *      departureTime,
 *      price,
 *      totalSeats -> fetch from airplane model
 * }
 * 
 * Spread Operator=it just destructures the whole object and along with other
 * properties it assigns one more property
 * 
 * obj={a:1, b:2}
 * obj={..obj, c:3}
 * 
 */