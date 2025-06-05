const fetch = require('node-fetch');

const API_URL = 'https://api.exchangerate.host/latest';

exports.convert = async (from, to, amount) => {
  const res = await fetch(`${API_URL}?base=${from}&symbols=${to}`);
  const data = await res.json();
  const rate = data.rates[to];
  return amount * rate;
};
