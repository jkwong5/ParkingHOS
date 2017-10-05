'use strict';

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
//const createError = require('http-errors');

let userSchema = mongoose.Schema({
  username: {type: String, unique: true, required: true},
  password: {type: String },
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'invaders'}],
  google : {
    id : {type: String},
    token: {type: String},
    email: {type: String},
    name: {type: String}
  }
});

//gives authentication props to User object
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('users', userSchema);
