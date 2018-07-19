var mongoose = require('mongoose');

var businessSchema = new mongoose.Schema({
  id: String,
  name: String,
  address: String,
  location : String,   //city
  conatct:String,
  businesstype : String,
  businesssubtype : String,
  url : String,
  email : String
});

mongoose.model('Business', businessSchema);

module.exports = mongoose.model('Business');
