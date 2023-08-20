const {FlightService}= require('../services/index');

const flightService= new FlightService();

const create= async(req,res)=>{
    try{
        let flightRequestData={
            flightNumber:req.body.flightNumber,
            airplane_id: req.body.airplane_id,
            departureAirportId:req.body.departureAirportId,
            arrivalAirportId:req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
        }
        const flight= await flightService.createFlight(flightRequestData);
        return res.status(201).json({
            data:flight,
            success:true,
            message:'Successfully created a flight!',
            err: {}
        });

    }catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message:'Not able to create a flight',
            err: error
        });
    }
}

const getAll= async(req,res)=>{
    try{
        const flights= await flightService.getAllFlightData(req.query);
        return res.status(201).json({
            data:flights,
            success:true,
            message:'Successfully created a flight!',
            err: {}
        });

    }catch(error){
        return res.status(500).json({
            data: {},
            success: false,
            message:'Not able to create a flight',
            err: error
        });
    }
}

module.exports={
    create,
    getAll
}