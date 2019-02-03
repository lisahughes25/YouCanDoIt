import { Mongoose } from "mongoose";

//Person
var personSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;

//MileageClaim
var mileageClaimSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  person: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Person'
},
  dateTravelled: Date,
  milesTravelled: Number,
  journeyDescription: String,
  amountClaimed: Number,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

//HoursWorked
var hoursWorkedClaimSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  person: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Person'
},
  startDateTime: Date,
  endDateTime: Date,
  hoursWorked: Number,
  isOvernight: Boolean,
  notes: String,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

//ExpenseClaim
var expenseClaimSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  person: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Person'
},
  expenseType: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'ExpenseType'
},
  amountClaimed: Number,
  description: String,
  dateOfClaim: Date,
  hasReceipt: Boolean,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

//ExpenseType
var expenseTypeSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  expenseName: String,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

//MileageRate
var mileageRateSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  mileageRateName: String,
  mileageRate: Number,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

//Activity
var activitySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  activityName: String,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

//HoursWorkedClaimActivity
var hoursWorkedClaimActivitySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  activity: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Activity'
},
  hoursWorkedClaim: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'HoursWorked'
},
isActive: Boolean,
dateCreated: {
  type: Date,
  default: Date.now
}
});

//AnnualLeave
var annualLeavechema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  person: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Person'
},
  month: String,
  hoursClaimed: Number,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});


var MileageClaimed = mongoose.model('MileageClaimed', mileageClaimedSchema);
var HoursWorked = mongoose.model('HoursWorked', hoursWorkedClaimSchema);
var ExpenseClaim = mongoose.model('ExpenseClaim', expenseClaimSchema);
var ExpenseType = mongoose.model('ExpenseType', expenseTypeSchema);
var MileageRate = mongoose.model('MileageRate', mileageRateSchema);
var Activity = mongoose.model('Activity', activitySchema);
var HoursWorkedClaimActivity = mongoose.model('HoursWorkedClaimActivity', hoursWorkedClaimActivitySchema);
var AnnualLeave = mongoose.model('AnnualLeave', annualLeavechema);
