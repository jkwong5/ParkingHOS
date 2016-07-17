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

app.use(express.static(__dirname + '/public/'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
  // console.log(res);
});

app.listen(port, function() {
  console.log('Listening on PORT: ', port);
});
