var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorieModel = new Schema({
	name: { type: String, required: true },
	created: { type: Date, default: Date.now() },
	updated: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('categorie', categorieModel);
