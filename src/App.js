import React, { useState } from 'react';
import Student from './component/Student';
import Admin from './component/Admin';
import Quiz from './QuizApplication/Quiz';
import './App.css';

const App = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleCheckAnswer = (questionIndex, selectedOptionIndex) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      const updatedSelectedAnswers = [...prevSelectedAnswers];
      updatedSelectedAnswers[questionIndex] = selectedOptionIndex;
      return updatedSelectedAnswers;
    });
  };

 

  return (
    <div className='exam'>
      <h1> Online Examination</h1>
      <Admin/>
    <Quiz/>
    </div>
  );
};

export default App;
