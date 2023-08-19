const {CityService} =require('../services/index');

//creating a city service object o order to use city service class
const cityService= new CityService();

/**
 *  router.get('/', (req, res)=>{
    res.json(movies);
    });

    route = router.get('/', controller);
    controller = (req, res)=>{
                    res.json(movies);
                 }

    Controller use case : the client side request will come to the controller this
    controller will pass the request data to the (service-> repo )and   they will somehow process
    the things and give it back to the controller then controller will form the response structure  
    and send it back to the user.
 */

/**
 * POST
 * data -> req.body
 */
const create = async (req,res)=>{
    try{
        const city=await cityService.createCity(req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully created a city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create a city',
            err: error
        });
    }
}

/**
 * DELETE ->/city/:id (id can be variabe that is why ':' is used here)
 * 
 *  req.params.id
 */
const destroy =async (req, res)=>{
    try{
        const response=await cityService.deleteCity(req.params.id);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to delete a city',
            err: error
        });
    }
}


/**
 * GET-> /city/:id
 * 
 * req.params.id
 */

const get = async (req,res)=>{
    try{
        const city=await cityService.getCity(req.params.id);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to fetch a city',
            err: error
        });
    }
}

/**
 * PUT -> /city/:id
 *  data= req.body
 */
const update=async (req,res)=>{
    try{
        const city=await cityService.updateCity(req.params.id,req.body);
        return res.status(201).json({
            data: city,
            success: true,
            message: 'Successfully updated a city',
            err: {}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to update a city',
            err: error
        });
    }
}

module.exports={
    create,
    destroy,
    get,
    update
}