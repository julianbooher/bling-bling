const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({ 
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  owes: {
    type: String,
    required: [true, "Owes is required"]
  },
  owed: {
    type: String,
    required: [true, "Owed is required"]
  },
  date: {
    type: Date,
    default: Date.now,
    required: [true, "Date can't be blank"]
  },
  cost: {
    type: Number,
    required: [true, "Cost is required"]
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);