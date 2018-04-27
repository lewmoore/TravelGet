var mongoose = require('mongoose');
mongoose.set('debug', true);
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var TravelSchema = new Schema(
  {
    id: Number,
    lat: Number,
    lon: Number,
    location: String,
    date: String,
    severity: String,
    borough: String,
    casualties: [{
      type: String, age: Number, class: String, severity: String, mode: String, ageBand: String }],
    vehicles: [{ type1: String, type2: String}]
  }
);

module.exports = mongoose.model('Travel', TravelSchema);