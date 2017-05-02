'use strict';

var mongoose = require('mongoose');
var createError = require('http-errors');

var invaderSchema = mongoose.Schema({
  date: {type: Date, Default: date.now},
  img_url: {type: String},
  lic_plate: {type: String},
  lic_state: {type: String},
  make: {type: String, ref: 'cars'},
  model: {type: String, ref: 'cars'}
});

module.exports = mongoose.model('invaders', invaderSchema);
