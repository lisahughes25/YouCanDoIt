const mongoose = require('mongoose');

var Activity = require('./models/activity');
var AnnualLeave = require('./models/annualLeave');
var ExpenseClaim = require('./models/expenseClaim');
var ExpenseType = require('./models/expenseType');
var HoursWorked = require('./models/hoursWorked');
var HoursWorkedClaimActivity = require('./models/hoursWorkedClaimActivity');
var MileageClaimed = require('./models/mileageClaimed');
var MileageRate = require('./models/mileageRate');
var Person = require('./models/person');

mongoose.connect('mongodb://localhost:27017/timesheet_app',{useNewUrlParser: true});

var personLisa = new Person({
  _id: new mongoose.Types.ObjectId,
  firstName: 'Lisa',
  lastName: 'Hughes',
  isActive: true,
  dateCreated: Date.now(),
});

personLisa.save (function(err) {
  if (err) throw err;
  console.log('Person saved.');
});
