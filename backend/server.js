let express = require('express');
let cloudinary = require('cloudinary');
let mongoose = require('mongoose');
let morgan = require('morgan');
let invaderRoutes = require('./route/invader-routes.js');
let errorMiddleWare = require('./lib/error.js');

let app = express();

let PORT = process.env.PORT || 3000;


//define monogo and connect it.
let MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/invaders';

mongoose.connect(MONGODB_URI);
mongoose.Promise = Promise;

//mouting routes and middlware
app.use(morgan('dev'));
app.use(errorMiddleWare);
app.use(invaderRoutes);

// app.get('/db/invaders', function(req, res) {
//   pg.connect(process.env.DATABASE_URL + '?ssl=true', function(err, client, done) {
//     console.log(err);
//
//     client.query('SELECT * FROM invaders ORDER BY p_id desc', function(err, result) {
//       if (err) return console.error(err);
//       res.send(result.rows);
//       client.end();
//       done();
//     });
//   });
// });

// app.get('/db/makeModel', function(req, res) {
//   pg.connect(process.env.DATABASE_URL + '?ssl=true', function(err, client, done) {
//     console.log(err);
//
//     client.query('SELECT * FROM makeModel', function(err, result) {
//       if (err) return console.error(err);
//       res.send(result.rows);
//       client.end();
//       done();
//     });
//   });
// });
//
// app.get('/postNew/', function(req, res) {
//
//   var dt = req.query.dt;
//   var licp = req.query.lp;
//   var lics = req.query.ls;
//   var make = req.query.ma;
//   var model = req.query.mo;
//   var lat = req.query.lat;
//   var lng = req.query.lng;
//   var img = req.query.img;
//
//   pg.connect(process.env.DATABASE_URL + '?ssl=true', function(err, client, done) {
//     console.log(err);
//
//     client.query('INSERT INTO invaders (dt, lic_plate, lic_state, make, model, lat, lng, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);', [dt, licp, lics, make, model, lat, lng, img], function(err, result) {
//       if (err) return console.error(err);
//       console.log(result.rows);
//       // res.send('hello world');
//       client.end();
//       res.redirect('/');
//       done();
//     });
//   });
// });

app.use(express.static('../public/'));

app.get('/', function(req, res) {
  res.sendFile('../public/index.html');
  // console.log(res);
});

app.listen(PORT, function() {
  console.log('Listening on port: ', PORT);
});
