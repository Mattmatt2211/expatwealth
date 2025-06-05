import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const MonthlyChart = ({ income, expenses }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const months = Array.from({ length: 12 }, (_, i) => i);
    const incomeByMonth = new Array(12).fill(0);
    const expenseByMonth = new Array(12).fill(0);

    income.forEach(i => {
      const m = new Date(i.date).getMonth();
      incomeByMonth[m] += i.amount;
    });

    expenses.forEach(e => {
      const m = new Date(e.date).getMonth();
      expenseByMonth[m] += e.amount;
    });

    const chart = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: months.map(m => m + 1),
        datasets: [
          { label: 'Income', data: incomeByMonth, backgroundColor: 'green' },
          { label: 'Expenses', data: expenseByMonth, backgroundColor: 'red' },
        ],
      },
    });

    return () => chart.destroy();
  }, [income, expenses]);

  return <canvas ref={canvasRef} />;
};

export default MonthlyChart;
