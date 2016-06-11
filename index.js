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
          , 'name'

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
    //console.log(response.body.menu);
    food = response.body.menu;
  });

var current_beers = [];
var current_beers_relevant = [];

request
  .get('/taproom/on-tap')
  .use(prefix)
  .end(function(err, response) {
    //console.log(response.body.beer_list.beers);
    current_beers = response.body.beer_list.beers;
    current_beers_relevant = current_beers.map(function(i){
      return {
            name: i.name,
            abv: i.abv,
            img: i.label_image.original
      }
    });
  });

app.get('/current-beers', function(request, response) {
      response.send(
        current_beers_relevant
      );
});

var hog_heaven = {};
request
  .get('/beers/hog-heaven')
  .use(prefix)
  .end(function(err, response) {
    hog_heaven = response.body.beer;
  });

app.get('/hog-heaven', function(request, response) {
      response.send(
        hog_heaven
      );
});

var the_reverend = {};
request
  .get('/beers/the-reverend')
  .use(prefix)
  .end(function(err, response) {
    the_reverend = response.body.beer;
  });

app.get('/the-reverend', function(request, response) {
      response.send(
        the_reverend
      );
});

var salvation = {};
request
  .get('/beers/salvation')
  .use(prefix)
  .end(function(err, response) {
    salvation = response.body.beer;
  });

app.get('/salvation', function(request, response) {
      response.send(
        salvation
      );
});

app.get('/easy', function(request, response) {
      response.send(
        [hog_heaven, the_reverend, salvation]
      );
});

var the_maharaja = {};
request
  .get('/beers/the-maharaja')
  .use(prefix)
  .end(function(err, response) {
    the_maharaja = response.body.beer;
  });

app.get('/the-maharaja', function(request, response) {
      response.send(
        the_maharaja
      );
});

var the_kaiser = {};
request
  .get('/beers/the-kaiser')
  .use(prefix)
  .end(function(err, response) {
    the_kaiser = response.body.beer;
  });

app.get('/the-kaiser', function(request, response) {
      response.send(
        the_kaiser
      );
});

var the_czar = {};
request
  .get('/beers/the-czar')
  .use(prefix)
  .end(function(err, response) {
    the_czar = response.body.beer;
  });

app.get('/the-czar', function(request, response) {
      response.send(
        the_czar
      );
});

app.get('/medium', function(request, response) {
      response.send(
        [the_maharaja, the_kaiser, the_czar]
      );
});

var mephistopheles = {};
request
  .get('/beers/mephistopheles')
  .use(prefix)
  .end(function(err, response) {
    mephistopheles = response.body.beer;
  });

app.get('/mephistopheles', function(request, response) {
      response.send(
        mephistopheles
      );
});

var samael = {};
request
  .get('/beers/samael-s')
  .use(prefix)
  .end(function(err, response) {
    samael = response.body.beer;
  });

app.get('/samael', function(request, response) {
      response.send(
        samael
      );
});

var the_beast = {};
request
  .get('/beers/the-beast')
  .use(prefix)
  .end(function(err, response) {
    the_beast = response.body.beer;
  });

app.get('/the-beast', function(request, response) {
      response.send(
        the_beast
      );
});

app.get('/hard', function(request, response) {
      response.send(
        [mephistopheles, samael, the_beast]
      );
});

