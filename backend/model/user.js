'use strict';

var mongoose = require('mongoose');
// var createError = require('http-errors');

var userSchema = mongoose.Schema({
  date: {type: Date, Default: Date.now},
  email: {type: String},
  id_token: {type: String},
  name: {type: String},
  img_url: {type: String},
});

module.exports = mongoose.model('users', userSchema);
