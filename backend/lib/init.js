let login = require('./login.js');
let signup = require('./signup.js');
let User = require('../model/user.js');

module.exports = function(passport){

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

login(passport);
signup(passport);
};
