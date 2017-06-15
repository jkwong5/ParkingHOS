(function(module){

var blogView = {};

blogView.retrieve = function(req, res) {
  var pg = require('pg');
  var conString = process.env.DATABASE_URL || 'postgres://iohdgxbnlhabzf:CAWulSWJwirWfzn8J5wJOQW_am@ec2-54-243-62-211.compute-1.amazonaws.com:5432/d2fdudnncu30g9';
  var client = new pg.Client(conString);
  client.connect();
  var query = client.query('select * from invaders');
  query.on('row', function (row, result) {
    result.addRow(row);
  });
  query.on('end', function (result) {
    client.end();
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(JSON.stringify(result.rows, null, ' ') + '\n ');
    res.end();
  });
};

blogView.retrieve();
}(window))
