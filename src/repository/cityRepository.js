const {City}=require('../models/index'); //index.js returns all the corresponding models that we are going to put insie models
const {Op} =require('sequelize')

class CityRepository{
    
    async createCity({name}){ //Object destructuring obj={name: "New Delhi"}
        try{
            const city= await City.create({
               // name: name 
               name
            });
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id: cityId
                }
            });
            return true;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async updateCity(cityId, data){ //data= {name: "Prayagraj"}
        try{
            //this below approach also works but will not return updated object 
            //but if you are using PgSql then you can use returning: true.
            // const city=await City.update(data,{
            //     where:{
            //         id:cityId
            //     },
            // });
            const city=await City.findByPk(cityId);
            city.name=data.name;
            await city.save();
            return city;
        }catch(error){
            console.log("Something went wrong in the repository layer");
            throw {error};
        }

    }

    async getCity(cityId){
        try{
            const city=await City.findByPk(cityId);
            return city;
        }catch(error){ 
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllCities(filter){ //filter can be empty also 
        try{
            if(filter.name){
                const cities= await City.findAll({
                    where:{
                        name:{ //attribute jispe ye filter lgega
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities=await City.findAll();
            return cities;

        }catch(error)
        {
            console.log('Something went wrong in repository layer');
            throw {error};
        }
    }

}

module.exports=CityRepository;