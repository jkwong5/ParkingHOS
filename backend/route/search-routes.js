'use strict';

// app modules
let Router = require('express').Router;
let Invader = require('../model/invaders.js');
let nunjucks = require('nunjucks');

let router = module.exports = new Router();

router.get('/search/license/:lic_plate', (req, res) => {
  Invader.find({lic_plate: req.params.lic_plate})
  .then(invaders => {
    if(!invaders.length) {
      res.send('not found');
    }
    let renderedInvaders = nunjucks.render('invaders.njk', {invaderList: invaders});
    res.send(renderedInvaders);
  });
});

router.get('/search/state/:stateName', (req, res) => {
  Invader.find({lic_state: req.params.stateName})
  .then(invaders => {
    if(!invaders.length) {
      res.send('not found');
    }
    let renderedInvaders = nunjucks.render('invaders.njk', {invaderList: invaders});
    res.send(renderedInvaders);
  });
});

router.get('/search/:make/:model', (req, res) => {
  Invader.find({make: req.params.make, model: req.params.model})
  .then(invaders => {
    if(!invaders.length) {
      res.send('not found');
    }
    let renderedInvaders = nunjucks.render('invaders.njk', {invaderList: invaders});
    res.send(renderedInvaders);
  });
});
