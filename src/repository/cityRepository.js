const {City}=require('../models/index'); //index.js returns all the corresponding models that we are going to put insie models

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
            const city=await City.update(data,{
                where:{
                    id:cityId
                }
            });
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

}

module.exports=CityRepository;