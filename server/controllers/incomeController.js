const Income = require('../models/Income');

exports.addIncome = async (req, res) => {
  try {
    const income = await Income.create({
      ...req.body,
      user: req.user.id
    });
    res.status(201).json(income);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add income' });
  }
};

exports.getIncome = async (req, res) => {
  try {
    const income = await Income.find({ user: req.user.id }).sort({ date: -1 });
    res.json(income);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch income' });
  }
};

exports.updateIncome = async (req, res) => {
  try {
    const income = await Income.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!income) return res.status(404).json({ error: 'Income not found' });
    res.json(income);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update income' });
  }
};

exports.deleteIncome = async (req, res) => {
  try {
    const income = await Income.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });
    if (!income) return res.status(404).json({ error: 'Income not found' });
    res.json({ message: 'Income deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete income' });
  }
};
