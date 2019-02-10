var mongoose = require('mongoose');

//MileageClaim
var mileageClaimSchema = mongoose.Schema({
  //_id: mongoose.Types.ObjectId,
  person: { 
    type: mongoose.Types.ObjectId, 
    ref: 'Person'
},
  dateTravelled: Date,
  milesTravelled: Number,
  journeyDescription: String,
  amountClaimed: Number,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

var MileageClaimed = mongoose.model('MileageClaimed', mileageClaimSchema);

module.exports = MileageClaimed;