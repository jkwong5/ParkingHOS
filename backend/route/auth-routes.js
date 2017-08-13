const Router = require('express').Router;
const User = require('../model/user');
const passport = require('passport');

let router = module.exports = new Router();

//signup route for new user
router.post('/signup', function(req, res) {
  User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
    if (err) {
      res.send(err);
      return;
    }

    passport.authenticate('local')(req, res, function () {
      res.json(user);
    });
  });
});

//passport will give a 401 unauthorized error by default is login is not successful
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.json(req.user);
});
