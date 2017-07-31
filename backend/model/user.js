'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const createError = require('http-errors');

let userSchema = mongoose.Schema({
  username: {type: String, unique: true},
  password: {type: String},
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'invaders'}]
});

userSchema.methods.hashPassword = function(password) {
  if(!password) return Promise.reject(createError(400));

  return new Promise((resolve, reject) => {
    //use hash method provided by bcrypt module. salt of 10
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return reject(err);
      this.password = hash;
      resolve(this);
    });
  });
};


module.exports = mongoose.model('users', userSchema);
