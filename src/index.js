const express=require('express');
const {PORT} = require('./config/serverConfig'); //object destructuring

const setupAndStartServer= async()=>{
    //create the express onject
    const app= express();

    app.listen(PORT, ()=>{
        console.log(`Server statrted at ${PORT}`); //templated string
    });

}

setupAndStartServer();