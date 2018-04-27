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
    borough: String
  }
);

module.exports = mongoose.model('Travel', TravelSchema);
