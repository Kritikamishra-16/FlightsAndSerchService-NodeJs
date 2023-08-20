const AirportService= require('../services/airportService');

const airportService= new AirportService();

const create= async (req,res)=>{
    try{
        const airport=await airportService.create(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Successfully created an airport',
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create a new airport',
            err: error
        });
    }
}

module.exports={
    create
}