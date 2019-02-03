var mongoose = require('mongoose');

//HoursWorked
var hoursWorkedClaimSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  person: { 
    type: mongoose.Types.ObjectId, 
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
    default: Date.now()
  }
});

var HoursWorked = mongoose.model('HoursWorked', hoursWorkedClaimSchema);

module.exports = HoursWorked;