'use strict';

var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    post: [{type: mongoose.Schema.Types.ObjectId, ref: 'invaders'}]
});

module.exports = mongoose.model('users', userSchema);
