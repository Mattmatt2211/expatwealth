import React, { useState } from 'react';
import api from '../api';

const IncomeForm = ({ onAdd }) => {
  const [form, setForm] = useState({ amount: '', source: '', city: '', currency: 'USD', description: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await api.post('/income', form);
    onAdd(data);
    setForm({ amount: '', source: '', city: '', currency: 'USD', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input name="amount" className="border p-1 w-full" placeholder="Amount" value={form.amount} onChange={handleChange} />
      <input name="source" className="border p-1 w-full" placeholder="Source" value={form.source} onChange={handleChange} />
      <input name="city" className="border p-1 w-full" placeholder="City" value={form.city} onChange={handleChange} />
      <input name="currency" className="border p-1 w-full" placeholder="Currency" value={form.currency} onChange={handleChange} />
      <input name="description" className="border p-1 w-full" placeholder="Description" value={form.description} onChange={handleChange} />
      <button className="bg-green-500 text-white px-2 py-1" type="submit">Add Income</button>
    </form>
  );
};

export default IncomeForm;
