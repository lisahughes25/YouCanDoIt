var mongoose = require('mongoose');

//ExpenseClaim
var expenseClaimSchema = mongoose.Schema({
  //_id: mongoose.Types.ObjectId,
  person: { 
    type: mongoose.Types.ObjectId, 
    ref: 'Person'
},
  expenseType: { 
    type: mongoose.Types.ObjectId, 
    ref: 'ExpenseType'
},
  amountClaimed: Number,
  description: String,
  dateOfClaim: Date,
  hasReceipt: Boolean,
  isActive: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now()
  }
});

var ExpenseClaim = mongoose.model('ExpenseClaim', expenseClaimSchema);

module.exports = ExpenseClaim;
