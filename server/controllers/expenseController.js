const Expense = require('../models/Expense');

exports.addExpense = async (req, res) => {
  try {
    const expense = await Expense.create({
      ...req.body,
      user: req.user.id
    });
    res.status(201).json(expense);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add expense' });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({ date: -1 });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
};
