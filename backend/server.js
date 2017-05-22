let express = require('express');
let cloudinary = require('cloudinary');
let mongoose = require('mongoose');
let morgan = require('morgan');
let path = require('path');
let invaderRoutes = require('./route/invader-routes.js');
let loadRoutes = require('./route/db-load-routes.js');
let carRoutes = require('./route/car-routes.js');
let searchRoutes = require('./route/search-routes.js');
let errorMiddleWare = require('./lib/error.js');
let cors = require('cors');
let nunjucks = require('nunjucks');

let app = express();

let PORT = process.env.PORT || 3000;

// Nunjucks templating setup
nunjucks.configure('../views', {
  autoescape: true,
  express: app
});

app.set('view engine', 'nunjucks');

//define monogo and connect it.
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/invaders';

mongoose.connect(MONGODB_URI);
mongoose.Promise = Promise;

//mouting routes and middlware
app.use(morgan('dev'));
app.use(cors());
app.use(errorMiddleWare);
app.use(loadRoutes);
app.use(invaderRoutes);
app.use(carRoutes);
app.use(searchRoutes);

app.use('/static', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.render('home.njk');
});

app.listen(PORT, function() {
  console.log('Listening on port: ', PORT);
});
