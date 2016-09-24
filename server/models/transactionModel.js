var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Categorie = require('./categorieModel');

var categoriesValidator= function (val, cb) {
	Categorie.aggregate([{ $group: { _id: null, categories: {$push: "$name"} }}], function (err, result) {
		if (err) console.log(err);
		cb(result[0].categories.indexOf(val) > -1);
	});
};

var transactionModel = new Schema({
	sum: { type: Number, min: 1, required: true },
	description: String,
	category: {
		type: String,
		default: 'n/a',
		validate: {
			validator: categoriesValidator,
			message: '{VALUE} is not set as a category.'
		}
	},
	created: { type: Date, default: Date.now() },
	updated: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('transaction', transactionModel);
