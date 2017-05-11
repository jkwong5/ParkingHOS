'use strict';

// app modules
let Router = require('express').Router;
let Invaders = require('../model/invaders.js');

let router = module.exports = new Router();

//will return an invader based on search terms input into the fields
router.get('/search/:lic_state/:lic_plate', (req, res) => {
  Invaders.find({lic_state: req.params.lic_state, lic_plate: req.params.lic_plate})
  .then(invader => res.json(invader))
  .catch(err => {
    console.error(err);
  });
});
