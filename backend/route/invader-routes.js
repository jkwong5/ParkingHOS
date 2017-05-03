//this should have:
// POST route to submit an invader
// GET route to render all invaders on the home screen

'use strict';

// app modules
let Router = require('express').Router;
let Invader = require('../model/invaders.js');
let createError = require('http-errors');
let jsonParser = require('body-parser').json()

// module constants
let router = module.exports = new Router();

//submit an invader
router.post('/submit', jsonParser, (req, res, next) => {
  new Invader(req.body).save()
  .then(invader => res.json(invader))
  .catch(next);
});
