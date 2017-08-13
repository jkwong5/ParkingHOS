/*jshint esversion: 6*/


const express = require('express');
const router = express.Router();
//const passport = require('passport');
const User = require('../model/user');

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){

	/* GET login page. */
	router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('index', { message: req.flash('message') });
	});

	/* Handle Login GET */
	router.get('/login',
	  passport.authenticate('local', { failureRedirect: '/nope' }),
	  function(req, res) {
	    console.log(req.user);
	    res.redirect('/');
	  });

	/* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('register',{message: req.flash('message')});
	});

	/*
		router.get('/login', passport.authenticate('local'), function(req, res) {
			console.log('made it into login get route');
	    res.json(req.user);
	  });
*/

	/* Handle Registration POST */
	router.post('/signup', (req, res, next) => {
		let user = new User(req.body)
		//user.hashPassword(user.password)
		user.save()

		passport.authenticate('local')(req, res, () => {
	  	req.session.save((err) => {
				if (err) {
					return next(err);
				}
				res.redirect('/');
	        });
	    });
	});

	/* GET Home Page */
	router.get('/home', isAuthenticated, function(req, res){
		res.render('home', { user: req.user });
	});

	/* Handle Logout */
	router.get('/signout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	return router;
}
