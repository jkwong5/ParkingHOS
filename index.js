const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const bodyParser = require('body-parser');
const invaderRoutes = require('./backend/route/invader-routes.js');
const loadRoutes = require('./backend/route/db-load-routes.js');
const carRoutes = require('./backend/route/car-routes.js');
const searchRoutes = require('./backend/route/search-routes.js');
const authRoutes = require('./backend/route/auth-routes.js');
const errorMiddleWare = require('./backend/lib/error.js');
const User = require('./backend/model/user');
const cors = require('cors');
const nunjucks = require('nunjucks');
const LocalStrategy = require('passport-local').Strategy;
//var GoogleStrategy = require('passport-google-oauth20').Strategy;
const flash = require('connect-flash');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);



let app = express();
let PORT = process.env.PORT || 3000;
app.use(cors());


// Nunjucks templating setup
nunjucks.configure('./public/views', {
  autoescape: true,
  express: app
});

app.set('view engine', 'nunjucks');
//app.set('trust proxy', 1);

//define monogo and connect it.
let MONGODB_URI =  process.env.MONGODB_URI || 'mongodb://localhost/invaders';

mongoose.connect(MONGODB_URI);
mongoose.Promise = Promise;

// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

/*
//passport config for Google Oauth2
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback'
},
function(token, refreshToken, profile, done) {
  // make the code asynchronous
    // User.findOne won't fire until we have all our data back from Google
  process.nextTick(function() {

    // try to find the user based on their google id
    User.findOne({ 'google.id' : profile.id }, function(err, user) {
      if (err)
        return done(err);

      if (user) {
      // if a user is found, log them in
        return done(null, user);
      } else {
      // if the user isnt in our database, create a new user
        var newUser = new User();

        // set all of the relevant information
        newUser.google.id    = profile.id;
        newUser.google.token = token;
        newUser.google.name  = profile.displayName;
        newUser.google.email = profile.emails[0].value; // pull the first email

        // save the user
        newUser.save(function(err) {
          if (err)
            throw err;
          return done(null, newUser);
        });
      }
    });
  });

}));
*/

//mouting routes and middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(expressSession({
  secret: process.env.EXPRESS_SES_SECRET || 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(errorMiddleWare);
app.use(authRoutes);
app.use(loadRoutes);
app.use(invaderRoutes);
app.use(carRoutes);
app.use(searchRoutes);

app.use('/static', express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
  if(req.isAuthenticated()) {
    res.render('home.njk', {user: req.user.username});
  } else {
    res.render('home.njk');
  }
});

app.listen(PORT, function() {
  console.log('Listening on port: ', PORT);
});
