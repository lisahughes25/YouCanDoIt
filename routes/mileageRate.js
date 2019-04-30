/**
 * Module Dependencies
 */
const errors = require('restify-errors');

/**
 * Model Schema - picking up the schema of Expense Type
 */
const MileageRate = require('../models/mileageRate');

//Make it public
module.exports = function(server) {

	/**
	 * POST - Add new record to the database. On the URL
	 */
	server.post('/mileageRate', (req, res, next) => {
    //capture error - if not json give me this error
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
    }
    
//The request body that forms the POST
		let data = req.body || {};

		let mileageRate = new MileageRate(data);
		mileageRate.save(function(err) {
			if (err) {
				console.error(err);
				return next(new errors.InternalError(err.message));
				next();
			}

			res.send(201);
			console.log(req.body);
			next();
		});
	});

	/**
	 * LIST
	 */
	server.get('/mileageRate', (req, res, next) => {
		MileageRate.find(req.params, function(err, docs) {
			if (err) {
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			}

			res.send(docs);
			next();
		});
	});

	/**
	 * GET
	 */
	server.get('/mileageRate/:mileageRate_id', (req, res, next) => {
		MileageRate.findOne({ _id: req.params.mileageRate_id }, function(err, doc) {
			if (err) {
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			}

			res.send(doc);
			next();
		});
	});

	/**
	 * UPDATE
	 */
	server.put('/mileageRate/:mileageRate_id', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		if (!data._id) {
			data = Object.assign({}, data, { _id: req.params.mileageRate_id });
		}

		MileageRate.findOne({ _id: req.params.mileageRate_id }, function(err, doc) {
			if (err) {
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			} else if (!doc) {
				return next(
					new errors.ResourceNotFoundError(
						'The resource you requested could not be found.',
					),
				);
			}

			MileageRate.update({ _id: data._id }, data, function(err) {
				if (err) {
					console.error(err);
					return next(
						new errors.InvalidContentError(err.errors.name.message),
					);
				}

				res.send(200, data);
				next();
			});
		});
	});

	/**
	 * DELETE
	 */
	server.del('/mileageRate/:mileageRate_id', (req, res, next) => {
		MileageRate.deleteOne({ _id: req.params.mileageRate_id }, function(err) {
			if (err) {
				console.error(err);
				return next(
					new errors.InvalidContentError(err.errors.name.message),
				);
			}

			res.send(204);
			next();
		});
	});
};    