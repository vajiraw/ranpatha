var mongoose = require('mongoose');
const Long = require('mongodb').NumberLong;


var employmenttypeSchema = new mongoose.Schema({
  id: String,
  name: String,
  type : String,
  


});


mongoose.model('employmenttype', employmenttypeSchema);
module.exports = mongoose.model('employmenttype');
