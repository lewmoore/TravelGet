const fastify = require('fastify')();
const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/travel_db';
mongoose.connect(mongoDB);
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
var appId = 'c379f1c3';
var appKey = '73ea15c39e18152d049f656c8d7d86f7';
var tfl = require('tfl.api')(appId, appKey);
tfl.accidentstats(2015).then(r => console.log(r.body));




