import React, { useState } from 'react';
import './Luckycard.css';

export default function Lucky() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 10) {
      setMessage('Please enter a valid number between 1 and 10');
    } else if (num < luckyNumber) {
      setMessage(`You guessed a smaller number`);
      setCount(count + 1);
    } else if (num > luckyNumber) {
      setMessage(`You guessed a bigger number.`);
      setCount(count + 1);
    } else {
      setMessage(`Congratulations! You guessed the right number in ${count + 1} attempts!`);
    }
    setGuess('');
  };

  return (
    <div className="App">
      <h1>Guess Lucky Number Game</h1>
      <p>Guess a number between 1 and 10:</p>
      <input type="text" placeholder="Guess lucky number..." value={guess} onChange={(e) => setGuess(e.target.value)} />
      <br />
    
      <button className="submitBtn"onClick={handleGuess}>Match Number</button>
     
      <br />
      <p>{message}</p>
    </div>
  );
}

