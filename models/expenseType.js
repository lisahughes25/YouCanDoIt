var mongoose = require('mongoose');

//ExpenseType
var expenseTypeSchema = mongoose.Schema({
  //_id: mongoose.Types.ObjectId,
  expenseName: String,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

var ExpenseType = mongoose.model('ExpenseType', expenseTypeSchema);

module.exports = ExpenseType;