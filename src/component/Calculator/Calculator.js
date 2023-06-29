import React, { useState } from 'react';
import './Calculator.css'
function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };

  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };

  const handleDivision = () => {
    setResult(Number(num1) / Number(num2));
  };

  const handleDelete = () => {
    setResult('');
    setNum1('');
    setNum2('');
  };

  return (
    <div>
      <h1>Calculator</h1>

      <div className="input-container">
        <input type="number" value={num1} onChange={handleNum1Change} />
        <input type="number" value={num2} onChange={handleNum2Change} />
      </div>

      <div className="button-container">
        <button onClick={handleAddition}>Addition</button>
        <button onClick={handleSubtraction}>Subtraction</button>
        <button onClick={handleMultiplication}>Multiplication</button>
        <button onClick={handleDivision}>Division</button>
        <button onClick={handleDelete}>Delete</button>
      </div>

      {result && <h1>Result: {result}</h1>}
    </div>
  );
}

export default Calculator;