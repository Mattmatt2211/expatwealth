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
