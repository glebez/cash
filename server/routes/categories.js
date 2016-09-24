var express = require('express');
var router = express.Router();
var categorieCtrl = require('../controllers/categorieCtrl');

/* GET users listing. */
router.get('/', function(req, res, next) {
  return categorieCtrl.list(req, res, next);
});

router.post('/new', function(req, res, next) {
  return categorieCtrl.create(req, res, next);
});

router.get('/:name', function (req, res, next) {
	return categorieCtrl.findByName(req, res, next);
})

module.exports = router;
