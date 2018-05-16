var mongoose = require('mongoose');

var MemoSchema = new mongoose.Schema(
  {
    title: String,
    content: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Memo', MemoSchema);
