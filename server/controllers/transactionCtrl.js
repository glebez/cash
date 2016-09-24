var Transaction = require('../models/transactionModel');

exports.create = function (req, res, next) {
	var entry = new Transaction({
		sum: req.body.sum,
		description: req.body.description,
		category: req.body.category
	});

	entry.save(function (err) {
		if (err) return next(err);
		res.send(201, entry);
	});
};

exports.list = function (req, res) {
	Transaction.find(function (err, result) {
		if (err) throw err;
		res.json(result);
	});
}

exports.total = function (req, res) {
	Transaction.aggregate([{ $group: { _id: null, total: {$sum: "$sum"} }}], function (err, result) {
		res.json(result);
	});
}

exports.totalByCategory = function (req, res) {
	Transaction.aggregate([{ $group: { _id: "$category", total: {$sum: "$sum"} }}], function (err, result) {
		res.json(result);
	});
}

exports.findById = function (req, res, next) {
	Transaction.findById(req.params.id, function (err, entry) {
		if (err) return next(err);
		if (!entry) {
			var err = new Error('No entry with this id.');
		  err.status = 404;
		  return next(err);
		}
		res.json(entry);
	})
}

exports.update = function (req, res, next) {
	var allowed = ['sum', 'description', 'category'];
	var id = req.params.id;
	var update = {};

	for (var key in req.body) {
		if (allowed.indexOf(key) > -1) {
			update[key] = req.body[key];
		}
	}

	if (!Object.keys(update).length) {
		var err = new Error('No fields to update');
		err.status = 403;
		console.log(err.message);
		return next(err);
	}

	update.updated = Date.now();

	Transaction.findByIdAndUpdate(id, update, {new: true}, function (err, entry) {
		if (err) next(err);
		res.status(200).json(entry);
	});
}
