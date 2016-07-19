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

app.get('/postNew/*', function(req, res) {
  console.log(req);
  console.log(res);
  var dt = req.params('dt');
  var licp = req.params('lp');
  var lics = req.params('ls');
  var make = req.params('ma');
  var model = req.params('mo');
  var lat = req.params('lat');
  var lng = req.params('lng');
  var img = req.params('img');

  console.log(dt);
  console.log(licp);
  console.log(lics);
  console.log(make);
  console.log(model);
  console.log(lat);
  console.log(lng);
  console.log(img);

  pg.connect(process.env.DATABASE_URL + '?ssl=true', function(err, client, done) {
    console.log(err);

    client.query('INSERT INTO invaders (dt, lic_plate, lic_state, make, model, lat, lng, img_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);', [dt, licp, lics, make, model, lat, lng, img], function(err, result) {
      if (err) return console.error(err);
      res.send(result.rows);
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
