'use strict';

// npm modules
let request = require('superagent');

// app modules
let Router = require('express').Router;
let Car = require('../model/cars.js');

let router = module.exports = new Router();

//Gets all car data from Edmonds API and saves the makes into MongoDB
router.get('/db/loadmakes', (req, res) => {
  request.get(`https://api.edmunds.com/api/vehicle/v2/makes?view=basic&fmt=json&api_key=vaphsweyh8b4zj8gbmncdkvf`)
  .end((err, response) => {
    if(err) {
      console.error(err);
      return false;
    }
    //create an array of objects with just their makes
    let carsArray = response.body.makes.map(function(ele) {
      return {make: ele.name, models: ele.models.map(function(model) {
        return model.niceName;
      })};
    });

    carsArray.forEach(function(car) {
      let newCar = new Car(car);
      newCar.save();
    });

    res.json({complete: true});
  });
});
