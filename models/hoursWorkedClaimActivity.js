var mongoose = require('mongoose');

//HoursWorkedClaimActivity
var hoursWorkedClaimActivitySchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  activity: { 
    type: mongoose.Types.ObjectId, 
    ref: 'Activity'
},
  hoursWorkedClaim: { 
    type: mongoose.Types.ObjectId, 
    ref: 'HoursWorked'
},
isActive: Boolean,
dateCreated: {
  type: Date,
  default: Date.now()
}
});

var HoursWorkedClaimActivity = mongoose.model('HoursWorkedClaimActivity', hoursWorkedClaimActivitySchema);

module.exports = HoursWorkedClaimActivity;