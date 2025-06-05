import React from 'react';

const BurnRateTable = ({ data }) => (
  <table className="min-w-full text-sm mt-4">
    <thead>
      <tr className="border-b">
        <th>City</th>
        <th>Burn Rate</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {data.map(b => (
        <tr key={b.city} className="border-b text-center">
          <td>{b.city}</td>
          <td>{b.burnRate.toFixed(2)}</td>
          <td>{b.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default BurnRateTable;
