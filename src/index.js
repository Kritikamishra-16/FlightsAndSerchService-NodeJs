const express=require('express');
const bodyParser= require('body-parser');
const ApiRoutes=require('./routes/index');

const {PORT} = require('./config/serverConfig'); //object destructuring

const setupAndStartServer= async()=>{
    //create the express onject
    const app= express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    //this app.use middleware is applied to all of the incoming requests
    app.use('/api',ApiRoutes);

    app.listen(PORT, ()=>{
        console.log(`Server statrted at ${PORT}`); //templated string
    });

}

setupAndStartServer();