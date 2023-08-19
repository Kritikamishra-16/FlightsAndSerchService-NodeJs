# Welcome to Flights Service

## Project Setup
- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following enviornment variables 
    - PORT=3000
- inside the `src/config` folder create a new file `config.json` ansd add the following piece of json

```
    {
        "development": {
        "username": <YOUR_DB_LOGIN_NAME>,
        "password": <YOUR_DB_PASSWORD>,
        "database": "Flights_Search_DB_DEV",
        "host": "127.0.0.1",
        "dialect": "mysql"
        }
    }

```
- Once you have added your db config as listed above , go to the src folder from your terminal and execute `npx sequelixe db:create`and then execute `npx sequelize db:migrate`


## DB Design
    - Airplane Table
    - Flight Table
    - Airport Table  
    - City Table

    - A flight belongs to an airplane ,but one airplane can be used in multiple flights
    - A city has many airports but one airport belongs to a city
    - One airport can have many flights ,but one flight belongs to one airport
    

## Tables

  ### City -> id, name, created_at, updated_at
  ### Airport-> id, name, address, city_id, created_at, updated_at
      Relationship ->City has many airports and an airport belongs to a city(one to many)


```
Using this command we made Airport models:
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer

Using this comand we can create seeders(starting inputs) file:
npx sequelize seed:generate --name add-airports

Using this command all seeders file will startgetting seeded
npx sequelize db:seed:all
```