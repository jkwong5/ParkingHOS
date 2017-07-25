'use strict';

var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  username: {type: String},
  password: {type: String},
  post: [{type: mongoose.Schema.Types.ObjectId, ref: 'invaders'}]
});

module.exports = mongoose.model('users', userSchema);
