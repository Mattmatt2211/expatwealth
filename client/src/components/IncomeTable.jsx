import React from 'react';

const IncomeTable = ({ data }) => (
  <table className="min-w-full text-sm">
    <thead>
      <tr className="border-b">
        <th>Amount</th>
        <th>Source</th>
        <th>City</th>
        <th>Currency</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {data.map(i => (
        <tr key={i._id} className="border-b text-center">
          <td>{i.amount}</td>
          <td>{i.source}</td>
          <td>{i.city}</td>
          <td>{i.currency}</td>
          <td>{i.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default IncomeTable;
