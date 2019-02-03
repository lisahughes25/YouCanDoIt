var mongoose = require('mongoose');

//Activity
var activitySchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  activityName: String,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

var Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;


