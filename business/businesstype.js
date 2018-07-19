var mongoose = require('mongoose');

var businesstypesSchema = new mongoose.Schema({
  id: String,
  main_id: String,
  name: String,
  type: String,
  order: String
});

mongoose.model('BusinessType', businesstypesSchema);

module.exports = mongoose.model('BusinessType');
