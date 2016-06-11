var request = require('superagent');
var prefix = require('superagent-prefix')('http://apis.mondorobot.com');

var express = require('express');
var app = express();

request
  .get('/beers/ellie-s-brown-ale')
  .use(prefix)
  .end(function(err, res) {
    console.log(res.body);
  });

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
