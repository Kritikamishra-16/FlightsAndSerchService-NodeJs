const {ClientErrorsCodes} = require('../utils/error-codes');

const validateCreateFlight= (req,res, next)=>{
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price
    ){
        //if any of the body params are missing we go inside the if body
        res.status(ClientErrorsCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: 'Invalid request body for creating a flight',
            err: 'Missing mandatory properties to create a flight'
        });
    }

    next();
}

module.exports= {
    validateCreateFlight
}