var express = require('express');
var router = express.Router();

var Memo = require('../models/Memo.js');

/* GET /memos listing. */
router.get('/', function(req, res, next) {
  Memo.find(function (err, memos) {
    if (err) return next(err);
    res.json(memos);
  });
});

/* POST /memos */
router.post('/', function(req, res, next) {
  Memo.create(req.body, function (err, payload) {
    if (err) return next(err);
    res.json(payload);
  });
});

/* GET /memos/id */
router.get('/:id', function(req, res, next) {
  Memo.findById(req.params.id, function (err, payload) {
    if (err) return next(err);
    res.json(payload);
  });
});

/* PUT /memos/:id */
router.put('/:id', function(req, res, next) {
  Memo.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, payload) {
    if (err) return next(err);
    res.json(payload);
  });
});

/* DELETE /memos/:id */
router.delete('/:id', function(req, res, next) {
  Memo.findByIdAndRemove(req.params.id, req.body, function (err, payload) {
    if (err) return next(err);
    res.json(payload);
  });
});

module.exports = router;
