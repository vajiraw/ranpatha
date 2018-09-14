var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
  loc_id: String,
  name: String,
  type : String,
});
mongoose.model('location', LocationSchema);

module.exports = mongoose.model('location');
