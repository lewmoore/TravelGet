const fastify = require('fastify')()

fastify.get('/', function(request, reply){
  reply.send({ hello: 'world '})
})

fastify.listen(3000, '127.0.0.1', function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
