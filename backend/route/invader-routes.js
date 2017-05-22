//this should have:
// POST route to submit an invader
// GET route to render all invaders on the home screen

'use strict';
// app modules
let Router = require('express').Router;
let Invader = require('../model/invaders.js');
let createError = require('http-errors');
let jsonParser = require('body-parser').json()
let fs = require('fs');

// module constants
let router = module.exports = new Router();

//submits an invader to mongoDB
router.post('/submit', jsonParser, (req, res, next) => {
  new Invader(req.body).save()
  .then(invader => res.json(invader))
  .catch(next);
});


router.get('/', (req, res) => {
  Invader.find({})
  .then(invaders => {
    res.render('home.njk', invaders);
  });
});

router.get('/states', (req, res) => {
  fs.readFile('./data/states.json', (err, states) => {
    if(err) {
      console.error(err);
    }
    let readableStates = JSON.parse(states);
    let stateNameList = readableStates.map(function(state) {
      return state.name;
    });
    res.json(stateNameList);
  });
});

//picture
//license plate
//license state
//date posted
