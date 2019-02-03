var mongoose = require('mongoose');

//Person
var personSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  firstName: {
    type: String,
    required: true
  },
  lastName: String,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

var Person = mongoose.model('Person', personSchema);

module.exports = Person;