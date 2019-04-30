/**
 * Module Dependencies
 */
const errors = require('restify-errors');

/**
 * Model Schema - picking up the schema of Expense Type
 */
const HoursWorked = require('../models/hoursWorked');

//Make it public
module.exports = function(server) {

	/**
	 * POST - Add new record to the database. On the URL
	 */
	server.post('/hoursWorked', (req, res, next) => {
    //capture error - if not json give me this error
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
    }
    
//The request body that forms the POST
		let data = req.body || {};

		let hoursWorked = new HoursWorked(data);
		hoursWorked.save(function(err) {
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
	server.get('/hoursWorked', (req, res, next) => {
		HoursWorked.find(req.params, function(err, docs) {
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
	server.get('/hoursWorked/:hoursWorked_id', (req, res, next) => {
		HoursWorked.findOne({ _id: req.params.hoursWorked_id }, function(err, doc) {
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
	server.put('/hoursWorked/:hoursWorked_id', (req, res, next) => {
		if (!req.is('application/json')) {
			return next(
				new errors.InvalidContentError("Expects 'application/json'"),
			);
		}

		let data = req.body || {};

		if (!data._id) {
			data = Object.assign({}, data, { _id: req.params.hoursWorked_id });
		}

		HoursWorked.findOne({ _id: req.params.hoursWorked_id }, function(err, doc) {
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

			HoursWorked.update({ _id: data._id }, data, function(err) {
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
	server.del('/hoursWorked/:hoursWorked_id', (req, res, next) => {
		HoursWorked.deleteOne({ _id: req.params.hoursWorked_id }, function(err) {
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