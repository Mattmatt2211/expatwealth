import React, { useEffect, useState } from 'react';
import api from '../api';
import IncomeForm from '../components/IncomeForm';
import ExpenseForm from '../components/ExpenseForm';
import IncomeTable from '../components/IncomeTable';
import ExpenseTable from '../components/ExpenseTable';
import BurnRateTable from '../components/BurnRateTable';
import MonthlyChart from '../components/MonthlyChart';

const Dashboard = () => {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [burn, setBurn] = useState([]);

  const fetchAll = async () => {
    const [iRes, eRes, bRes] = await Promise.all([
      api.get('/income'),
      api.get('/expenses'),
      api.get('/burn-rate'),
    ]);
    setIncome(iRes.data);
    setExpenses(eRes.data);
    setBurn(bRes.data);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const totalBalance = income.reduce((a, b) => a + b.amount, 0) - expenses.reduce((a, b) => a + b.amount, 0);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <h2 className="font-semibold mb-2">Add Income</h2>
          <IncomeForm onAdd={i => setIncome([i, ...income])} />
        </div>
        <div className="w-1/2">
          <h2 className="font-semibold mb-2">Add Expense</h2>
          <ExpenseForm onAdd={e => setExpenses([e, ...expenses])} />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <h3 className="font-semibold">Income</h3>
          <IncomeTable data={income} />
        </div>
        <div className="w-1/2">
          <h3 className="font-semibold">Expenses</h3>
          <ExpenseTable data={expenses} />
        </div>
      </div>
      <div>
        <h3 className="font-semibold">Burn Rate per City</h3>
        <BurnRateTable data={burn} />
      </div>
      <div>
        <h3 className="font-semibold mb-2">Monthly Chart</h3>
        <MonthlyChart income={income} expenses={expenses} />
      </div>
      <div className="text-xl font-bold">Total Balance: {totalBalance}</div>
    </div>
  );
};

export default Dashboard;
