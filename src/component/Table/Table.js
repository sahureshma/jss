import React, { useState } from 'react';
import './Table.css';

function TableGenerator() {
  const [number, setNumber] = useState(0);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setNumber(value);
  };

  const generateTable = () => {
    const table = [];
    for (let i = 1; i <= number; i++) {
      table.push(
        <tr key={i}>
          <td>{i}</td>
        </tr>
      );
    }
    return table;
  };

  return (
    <div className="Table-generator">
     <input type="number" value={number} onChange={handleInputChange} />
      <table>
        <tbody>
          {generateTable()}
        </tbody>
      </table>
    </div>
  );
}

export default TableGenerator;