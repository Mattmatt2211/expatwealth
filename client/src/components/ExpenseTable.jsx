import React from 'react';

const ExpenseTable = ({ data }) => (
  <table className="min-w-full text-sm">
    <thead>
      <tr className="border-b">
        <th>Amount</th>
        <th>Category</th>
        <th>City</th>
        <th>Currency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {data.map(e => (
        <tr key={e._id} className="border-b text-center">
          <td>{e.amount}</td>
          <td>{e.category}</td>
          <td>{e.city}</td>
          <td>{e.currency}</td>
          <td>{e.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ExpenseTable;
