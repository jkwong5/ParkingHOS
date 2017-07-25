let express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const passport = require('passport');
const jsonParser = require('body-parser').json();
const invaderRoutes = require('./backend/route/invader-routes.js');
const loadRoutes = require('./backend/route/db-load-routes.js');
const carRoutes = require('./backend/route/car-routes.js');
const searchRoutes = require('./backend/route/search-routes.js');
const authRoutes = require('./backend/route/auth-routes.js')(passport);
const errorMiddleWare = require('./backend/lib/error.js');
const cors = require('cors');
const nunjucks = require('nunjucks');
const initPassport = require('./backend/lib/init.js');
const expressSession = require('express-session');
const flash = require('connect-flash');


let app = express();
initPassport(passport);
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

//mouting routes and middlware
app.use(jsonParser);
app.use(expressSession({secret: 'mySecretKey'}));
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

// require('./backend/lib/login.js')(passport, LocalStrategy);

app.listen(PORT, function() {
  console.log('Listening on port: ', PORT);
});
