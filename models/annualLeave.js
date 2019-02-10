var mongoose = require('mongoose');

//AnnualLeave
var annualLeavechema = mongoose.Schema({
  //_id: mongoose.Types.ObjectId,
  person: { 
    type: mongoose.Types.ObjectId, 
    ref: 'Person'
},
  month: String,
  hoursClaimed: Number,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

var AnnualLeave = mongoose.model('AnnualLeave', annualLeavechema);

module.exports = AnnualLeave;