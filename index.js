var request = require('superagent');
var prefix = require('superagent-prefix')('http://apis.mondorobot.com');

var express = require('express');
var app = express();
var bodyParser = require('body-parser')

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
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/roles', function(request, response)
{
    db.roles.findAll(
      {
        attributes :
        [
            'id'
          , 'name'
          , 'flavor'
          , 'ability'

        ]
      }
    ).then(
      function (roles)
      {
        response.send(
          roles.map(function (r) { return r.get({ plain : true }) })
        );
      }
    );
  }
);

app.get('/rooms', function(request, response)
{
    db.rooms.findAll(
      {
        attributes : [
            'id'
          , 'room_name'

        ]
      }).then(
      function (rooms)
      {
        response.send(
          rooms.map(function (r) { return r.get({ plain : true }) })
        );
      }
    );
  }
);

app.get('/tiles', function(request, response) {
  console.log(request.query.room_id);
  db.tiles.findAll(
    { where: { room: request.query.room_id } }
  ).then(function(tiles)
    {
      console.log(tiles);
      response.send(
        tiles.map(function (r) { return r.get({ plain : true }) })
      );
    }
  );
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

var food = {};
request
  .get('/taproom/menu')
  .use(prefix)
  .end(function(err, response) {
    console.log(response.body.menu);
    food = response.body.menu;
  });
