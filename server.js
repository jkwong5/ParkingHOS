var requestProxy = require('express-request-proxy'),
  express = require('express'),
  cloudinary = require('cloudinary'),
  pg = require('pg'),
  port = process.env.PORT || 3000,
  app = express();

app.get('/db/invaders', function(req, res) {
  pg.connect(process.env.DATABASE_URL + '?ssl=true', function(err, client, done) {
    console.log(err);

    client.query('SELECT * FROM invaders', function(err, result) {
      if (err) return console.error(err);
      res.send(result.rows);
    });
  });
});

app.get('/db/makeModel', function(req, res) {
  pg.connect(process.env.DATABASE_URL + '?ssl=true', function(err, client, done) {
    console.log(err);

    client.query('SELECT * FROM makeModel', function(err, result) {
      if (err) return console.error(err);
      res.send(result.rows);
    });
  });
});

app.get('/postNew/', function(req, res) {

  var dt = req.query.dt;
  var licp = req.query.lp;
  var lics = req.query.ls;
  var make = req.query.ma;
  var model = req.query.mo;
  var lat = req.query.lat;
  var lng = req.query.lng;
  var img = req.query.img;

  pg.connect(process.env.DATABASE_URL + '?ssl=true', function(err, client, done) {
    console.log(err);

    client.query('INSERT INTO invaders (dt, lic_plate, lic_state, make, model, lat, lng, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);', [dt, licp, lics, make, model, lat, lng, img], function(err, result) {
      if (err) return console.error(err);
      console.log(result.rows);
      // res.send('hello world');
      res.redirect('/');
    });
  });
});

app.use(express.static(__dirname + '/public/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
  // console.log(res);
});

app.listen(port, function() {
  console.log('Listening on PORT: ', port);
});
