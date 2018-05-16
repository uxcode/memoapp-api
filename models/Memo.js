var mongoose = require('mongoose');

var MemoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, default: '' },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Memo', MemoSchema);
