'use strict';

// app modules
let Router = require('express').Router;
let Car = require('../model/cars.js');

let router = module.exports = new Router();

//get array of car makes to be called on page load
router.get('/cars', (req, res) => {
  let carMakeArray = [];
  Car.find({})
  .then(cars => {
    cars.forEach(function(car) {
      carMakeArray.push(car.make);
    });
  })
  .then(() => res.json(carMakeArray))
  .catch(err => {
    console.log(err);
    return false;
  });
});

// router.get('cars/:make', (req, res) => {
//   Car.findOne(req.params.make)
//
// })
