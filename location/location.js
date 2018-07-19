var mongoose = require('mongoose');

var LocationSchema = new mongoose.Schema({
  loc_id: String,
  name: String
});
mongoose.model('Location', LocationSchema);

module.exports = mongoose.model('Location');
