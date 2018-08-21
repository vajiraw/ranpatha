var mongoose = require('mongoose');
const Long = require('mongodb').NumberLong;

var MyNumber = mongoose.model('my_number', { long_number: Number });
var employmentSchema = new mongoose.Schema({
  name: String,
  address: String,
  location : String,   //city
  conatct: String,
  url : String,
  email : String,
  service : String,
  ds : String,
  providers : {type:Array, default: []},
  //providers        : {type:Array, default: []},


});


mongoose.model('employment', employmentSchema);
module.exports = mongoose.model('employment');
