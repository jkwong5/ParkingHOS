'use strict';

// app modules
let Router = require('express').Router;
let Invader = require('../model/invaders.js');

let router = module.exports = new Router();

//TODO: revisit this piece of code now that we have a driver model
router.get('/search/:lic_state/:lic_plate', (req, res) => {
  Invader.find({lic_state: req.params.lic_state, lic_plate: req.params.lic_plate})
  .then(invader => res.json(invader))
  .catch(err => {
    console.error(err);
  });
});
