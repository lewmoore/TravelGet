const fastify = require('fastify')();

var appId = 'c379f1c3';
var appKey = '73ea15c39e18152d049f656c8d7d86f7';
var tfl = require('tfl.api')(appId, appKey);
tfl.accidentstats(2015).then(r => console.log(r.body));