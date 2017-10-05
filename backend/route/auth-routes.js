const Router = require('express').Router;
const User = require('../model/user');
const passport = require('passport');
const createError = require('http-errors');
const nunjucks = require('nunjucks');

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
        let regUserPage = nunjucks.render('auth.njk', {user: user.username});
        res.send(regUserPage);
      });
    });
  } else {
    return next(createError(400, 'please enter valid email address'));
  }
});

router.get('/logout', function(req, res){
  req.logout();
  req.session.destroy();
  res.redirect('/');
});

//passport will give a 401 unauthorized error by default is login is not successful
router.post('/login', passport.authenticate('local'), function(req, res) {
  let loggedinUserPage = nunjucks.render('auth.njk', {user: req.user.username});
  console.log(req.session.id);
  //console.log(req.session.passport);
  res.send(loggedinUserPage);
});

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

    // if they aren't redirect them to the home page
  res.redirect('/');
}


// router.get('/auth/google',
//   passport.authenticate('google', { scope: ['email'] }));
//
//
// router.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   function(req, res) {
//     console.log('success with the callback');
//     console.log(req.user);
//     res.redirect('/');
//   });


router.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));

   // the callback after google has authenticated the user
router.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect : '/',
    failureRedirect : 'https://google.com'
  }));
