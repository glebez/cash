var express = require('express');
var router = express.Router();
var transactionCtrl = require('../controllers/transactionCtrl');

/* GET home page. */
router.get('/', function(req, res, next) {
  transactionCtrl.list(req, res, next);
});

router.post('/new', function(req, res, next) {
  return transactionCtrl.create(req, res, next);
});

router.get('/total', function(req, res, next) {
  return transactionCtrl.total(req, res, next);
});

router.get('/totalByCategory', function(req, res, next) {
  return transactionCtrl.totalByCategory(req, res, next);
});

router.get('/:id', function (req, res, next) {
	return transactionCtrl.findById(req, res, next);
});

router.patch('/:id', function (req, res, next) {
	return transactionCtrl.update(req, res, next);
});

module.exports = router;
