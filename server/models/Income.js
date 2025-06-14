const mongoose = require('mongoose');

const IncomeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  amount: { type: Number, required: true },
  source: { type: String, required: true },
  city: { type: String, required: true },
  currency: { type: String, default: 'USD' },
  description: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Income', IncomeSchema);
