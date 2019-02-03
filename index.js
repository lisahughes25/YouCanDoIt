const mongoose = require('mongoose');
var Person = require('./models/person');

mongoose.connect('mongodb://localhost:27017/timesheet_app',{useNewUrlParser: true});

var personLisa = new Person({
  _id: new mongoose.Schema.Types.ObjectId,
  firstName: 'Lisa',
  lastName: 'Hughes',
  isActive: true,
  dateCreated: Date.now,
});

personLisa.save (function(err) {
  if (err) throw err;
  console.log('Person saved.');
});
