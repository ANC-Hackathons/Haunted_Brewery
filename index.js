var request = require('superagent');
var prefix = require('superagent-prefix')('http://apis.mondorobot.com');

var express = require('express');
var app = express();

var Sequelize = require("sequelize");

var sequelize = new Sequelize(
  'd763clvb09amt6',
  'wskzmzdcayybbm',
  'p2I7frk9uxPURqiVFNlU0dT5zu',
  {
    host:  'ec2-107-22-235-119.compute-1.amazonaws.com:5432',
    dialect: 'postgres',

    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  }
);

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.get('/classes', function(request, response) {
  response.send({
    classes: ['Brewmaster', 'Cellarmaster', 'Bartender', 'Chemist', 'Keg Whisperer', 'Forklift Pilot']
  })
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
