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
const cors = require('cors');
const nunjucks = require('nunjucks');
const expressSession = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');


let app = express();
let PORT = process.env.PORT || 3000;

// Nunjucks templating setup
nunjucks.configure('./public/views', {
  autoescape: true,
  express: app
});

app.set('view engine', 'nunjucks');

//define monogo and connect it.
let MONGODB_URI =  process.env.MONGODB_URI || 'mongodb://localhost/invaders';

mongoose.connect(MONGODB_URI);
mongoose.Promise = Promise;

// passport config
let User = require('./backend/model/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//mouting routes and middlware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(cors());
app.use(errorMiddleWare);
app.use(authRoutes);
app.use(loadRoutes);
app.use(invaderRoutes);
app.use(carRoutes);
app.use(searchRoutes);

app.use('/static', express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('home.njk');
});

app.listen(PORT, function() {
  console.log('Listening on port: ', PORT);
});
