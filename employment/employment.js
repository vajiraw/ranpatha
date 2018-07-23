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
  displyOrder : Number // order in display

});


mongoose.model('Employment', employmentSchema);
module.exports = mongoose.model('Employment');