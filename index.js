var request = require('superagent');
var prefix = require('superagent-prefix')('http://apis.mondorobot.com');

var express = require('express');
var app = express();

var Sequelize = require("sequelize");

var pg_config = require('./config/postgres.json');
var sequelize = new Sequelize(
  'd763clvb09amt6',
  'wskzmzdcayybbm',
  'p2I7frk9uxPURqiVFNlU0dT5zu',
  pg_config
);

var db = require('./models');

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/classes', function(request, response)
{
    db.classes.findAll(
      {
        attributes : [
            'id'
          , 'name'
          , 'flavor'
          , 'ability'

        ]
      }).then(
      function (classes)
      {
        response.send(
          classes.map(function (r) { return r.get({ plain : true }) })
        );
      }
    );
  }
);


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
