const Router = require('express').Router;
const User = require('../model/user');
const passport = require('passport');
const createError = require('http-errors')

let router = module.exports = new Router();

//email validation regex
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

//signup route for new user
router.post('/signup', function(req, res, next) {
  if(validateEmail(req.body.username)) { //if the email is valid, execute the code below
    User.register(new User({username : req.body.username}), req.body.password, function(err, user) {
      if (err) {
        res.send(err);
        return;
      }
      passport.authenticate('local')(req, res, function () {
        res.json(user);
      });
    })
  } else {
    return next(createError(400, 'please enter valid email address'))
  };
});

//passport will give a 401 unauthorized error by default is login is not successful
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.json(req.user);
});
