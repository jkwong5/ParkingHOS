'use strict';
// app modules
let Router = require('express').Router;
let Invader = require('../model/invaders.js');
let Driver = require('../model/drivers.js');
let createError = require('http-errors');
let jsonParser = require('body-parser').json();
let nunjucks = require('nunjucks');
let path = require('path');
let fs = require('fs');

// module constants
let router = module.exports = new Router();

//submits an invader to mongoDB
router.post('/submit', jsonParser, (req, res, next) => {
  new Invader(req.body).save()
  .then(invader => {
    let pltAndState = invader.lic_plate.concat(invader.lic_state);
    let query = {plateAndState: pltAndState};
    Driver.findOneAndUpdate(query,
      { '$push': { 'parkingInstances': invader._id } },
      {upsert:true}, function(err, doc) {
        if (err) return res.send(500, { error: err });
        res.json(doc);
      });
  })
  .catch(next);
});

//renders all the invaders in the database
router.get('/invaders', (req, res) => {
  Invader.find({})
  .then(invaders => {
    let renderedInvaders = nunjucks.render('invaders.njk', {invaderList: invaders});
    res.send(renderedInvaders);
  });
});

//populates dropdown menu of states on the invader post module
// router.get('/states', (req, res) => {
//   fs.readFile(path.join(__dirname, '../data/states.json'), (err, states) => {
//     if(err) {
//       console.error(err);
//     }
//     let readableStates = JSON.parse(states);
//     let stateNameList = readableStates.map(function(state) {
//       return state.name;
//     });
//     let renderedStates = nunjucks.render('states.njk', {stateList: stateNameList});
//     res.send(renderedStates);
//   });
// });

router.get('/states', (req, res) => {
 let macPath = path.join(__dirname, '../data/states.json');
 fs.readFile(path.resolve(macPath), (err, states) => {
   if(err) {
     console.error(err);
   }
   let readableStates = JSON.parse(states);
   let stateNameList = readableStates.map(function(state) {
     return state.name;
   });
   let renderedStates = nunjucks.render('states.njk', {stateList: stateNameList});
   res.send(renderedStates);
   res.end();
 });
});

//allows for shaming count on each invader to persist
router.post('/shame/:id', (req, res) => {
  Invader.findOne({_id: req.params.id})
  .then(invader => {
    invader.shame += 1;
    invader.save();
    res.json(invader.shame);
  })
  .catch((err) => {
    console.error(err);
  });
});
