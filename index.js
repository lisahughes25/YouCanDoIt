// var Activity = require('./models/activity');
// var AnnualLeave = require('./models/annualLeave');
// var ExpenseClaim = require('./models/expenseClaim');
// var ExpenseType = require('./models/expenseType');
// var HoursWorked = require('./models/hoursWorked');
// var HoursWorkedClaimActivity = require('./models/hoursWorkedClaimActivity');
// var MileageClaimed = require('./models/mileageClaimed');
// var MileageRate = require('./models/mileageRate');
// var Person = require('./models/person');

/**
 * Module Dependencies
 */
const config = require('./config');
const restify = require('restify');
const mongoose = require('mongoose');


/**
  * Initialize Server
  */
const server = restify.createServer({
	name: config.name,
	version: config.version,
});

/**
  * Middleware
  */
server.use(restify.plugins.bodyParser());
//server.use(restify.plugins.jsonBodyParser({ mapParams: true }))
server.use(restify.plugins.acceptParser(server.acceptable))
server.use(restify.plugins.queryParser({ mapParams: true }))
server.use(restify.plugins.fullResponse())

/**
  * Start Server, Connect to DB & Require Routes
  */
server.listen(config.port, () => {
	// establish connection to mongodb
	mongoose.Promise = global.Promise;
	mongoose.connect(config.db.uri, { useNewUrlParser: true });

	const db = mongoose.connection;

	db.on('error', (err) => {
	    console.error(err);
	    process.exit(1);
	});

	db.once('open', () => {
      require('./routes/activity')(server);
      require('./routes/person')(server);
			console.log(`Server is listening on port ${config.port}`);
	});
});

