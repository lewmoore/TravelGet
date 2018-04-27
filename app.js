const fastify = require('fastify')();

fastify.register(require('fastify-mongoose'), {
  uri: 'mongodb://localhost/test_db'
}, err => {
  if (err) throw err
})

var appId = 'c379f1c3';
var appKey = '73ea15c39e18152d049f656c8d7d86f7';
var tfl = require('tfl.api')(appId, appKey);

fastify.get('/', function(request, reply) {
  reply.send('Hello');
});

tfl.accidentstats(2015).then(r => console.log(r.body[0]));
/*
fastify.listen(3000, '127.0.0.1', function (err) {
  if (err) throw err;
  console.log(`server listening on ${fastify.server.address().port}`);
});
*/
