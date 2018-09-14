var mongoose = require('mongoose');


var countrySchema = new mongoose.Schema({
  name: String,
  address: String,
  location : String,   //city
  conatct: String,

});

mongoose.model('country', countrySchema);
module.exports = mongoose.model('country');
