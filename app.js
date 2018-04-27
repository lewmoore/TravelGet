const fastify = require('fastify')();
const Travel = require('./models/travel_data.js');
const async = require('async');
var appId = 'c379f1c3';
var appKey = '73ea15c39e18152d049f656c8d7d86f7';
var tfl = require('tfl.api')(appId, appKey);

fastify.register(require('fastify-mongoose'), {
  uri: 'mongodb://localhost/test_db'
}, err => {
  if (err) throw err;
});

fastify.get('/', function(request, reply) {
  reply.send('Hello');
  console.log("connected to port 3000");
});

travelData = tfl.accidentstats(2015).then(r => {console.log(r.body[0]); return r.body;});
console.log(travelData);

fastify.listen(3000, err => {
  console.log("server listening on 3000");
});
