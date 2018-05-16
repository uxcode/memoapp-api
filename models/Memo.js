var mongoose = require('mongoose');

var MemoSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
  note: String
});

module.exports = mongoose.model('Memo', MemoSchema);
