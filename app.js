const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const travel = require('./models/travel_data.js');
mongoose.connect('mongodb://localhost:27017/test_db');

var appId = 'c379f1c3';
var appKey = '73ea15c39e18152d049f656c8d7d86f7';
var tfl = require('tfl.api')(appId, appKey);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

tfl.accidentstats(2015).then(r => { console.log(r.body[0]), travel.create({id: 23, location: 'Riga'})});


//tfl.accidentstats(2015).then(r => console.log(r.body[0]));

app.listen(9000, () => console.log('App listening on port 9000!'))
