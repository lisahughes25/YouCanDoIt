var mongoose = require('mongoose');

//MileageRate
var mileageRateSchema = mongoose.Schema({
  //_id: mongoose.Types.ObjectId,
  mileageRateName: String,
  mileageRate: Number,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

var MileageRate = mongoose.model('MileageRate', mileageRateSchema);

module.exports = MileageRate;