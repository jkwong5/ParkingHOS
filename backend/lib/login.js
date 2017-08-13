// module.exports = function(passport, LocalStrategy){
const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');
const passport = require('passport')
const Router = require('express').Router;

//const bCrypt = require('bcryptjs');

//Server Side
const router = module.exports = new Router()

router.post('/login', (req, res, next) => {
  const validationResult = validateLoginForm(req.body);
  if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    }
    return passport.authenticate('local-login', (err, token, userData) => {
      if (err) {
        if (err.name === 'IncorrectCredentialsError') {
          return res.status(400).json({
            success: false,
            message: err.message
          });
        }
        return res.status(400).json({
          success: false,
          message: 'Could not process the form.'
        });
      }
      return res.json({
        success: true,
        message: 'You have successfully logged in!',
        token,
        user: userData
      });
    })(req, res, next);
  });
