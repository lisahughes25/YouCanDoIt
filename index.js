/** To do - Routes for ...
var AnnualLeave = require('./models/annualLeave');
var ExpenseClaim = require('./models/expenseClaim');
var ExpenseType = require('./models/expenseType');
var HoursWorked = require('./models/hoursWorked');
var HoursWorkedClaimActivity = require('./models/hoursWorkedClaimActivity');
var MileageClaimed = require('./models/mileageClaimed');
var MileageRate = require('./models/mileageRate');
*/

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
 //JSON
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser({ mapParams: true }));
server.use(restify.plugins.fullResponse());

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
			require('./routes/annualLeave')(server);
			require('./routes/person')(server);
			require('./routes/expenseClaim')(server);
			require('./routes/expenseType')(server);
			require('./routes/hoursWorked')(server);
			require('./routes/hoursWorkedClaimActivity')(server);
			require('./routes/mileageClaimed')(server);
			require('./routes/mileageRate')(server);
			console.log(`Server is listening on port ${config.port}`);
	});
});

