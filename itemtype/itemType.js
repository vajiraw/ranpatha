var mongoose = require('mongoose');

var ItemTypeSchema = new mongoose.Schema({
  item_id: String,
  name: String
});
mongoose.model('ItemType', ItemTypeSchema);

module.exports = mongoose.model('ItemType');
