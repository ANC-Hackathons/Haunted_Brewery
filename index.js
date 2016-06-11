var request = require('superagent');
var prefix = require('superagent-prefix')('http://apis.mondorobot.com');

request
  .get('/beers')
  .use(prefix)
  .end(funciton(err, res) {
    console.log(res);
  });
