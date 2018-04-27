
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const travel = require('./models/travel_data.js');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db('test_db');
  const collection = db.collection('documents');
  
var appId = 'c379f1c3';
var appKey = '73ea15c39e18152d049f656c8d7d86f7';
var tfl = require('tfl.api')(appId, appKey);

  
   tfl.accidentstats(2015).then(r => {let data = r.body; 
     for(let i in r.body) { delete r.body[i].$type; collection.insertOne(r.body[i])}});
});
