const Expense = require('../models/Expense');
const { convert } = require('../utils/currencyConverter');

exports.getBurnRate = async (req, res) => {
  try {
    const targetCurrency = req.query.currency || 'USD';
    const expenses = await Expense.find({ user: req.user.id });

    const map = {};
    expenses.forEach(exp => {
      const city = exp.city;
      const monthKey = `${exp.date.getFullYear()}-${exp.date.getMonth()}`;
      map[city] = map[city] || { totals: {}, months: new Set() };
      map[city].totals[monthKey] = (map[city].totals[monthKey] || 0) + convert(exp.currency, targetCurrency, exp.amount);
      map[city].months.add(monthKey);
    });

    const result = Object.keys(map).map(city => {
      const months = map[city].months.size || 1;
      const total = Object.values(map[city].totals).reduce((a, b) => a + b, 0);
      return { city, burnRate: total / months, currency: targetCurrency };
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to calculate burn rate' });
  }
};
