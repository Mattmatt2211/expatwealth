const rates = {
  USD: 1,
  EUR: 1.1,
  GBP: 1.25,
  CAD: 0.75,
};

exports.convert = (from, to, amount) => {
  if (!rates[from] || !rates[to]) return amount;
  return (amount / rates[from]) * rates[to];
};
