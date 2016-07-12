var requestProxy = require('express-request-proxy'),
  express = require('express'),
  port = process.env.PORT || 3000,
  app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
  // console.log(res);
});

app.listen(port, function() {
  console.log('Listening on PORT: ', port);
});

// app.use(express.static('./'));
//
// app.get('*', function(request, response) {
//   console.log('New request:', request.url);
//   response.sendFile('index.html', {
//     root: '.'
//   });
// });
