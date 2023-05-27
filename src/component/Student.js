
import React, { useState, useEffect } from 'react';
import Quiz from '../QuizApplication/Quiz';

const Student = ({ questions, handleCheckAnswer, selectedAnswers }) => {
  const [examQuestions, setExamQuestions] = useState([]);

  useEffect(() => {
    const randomQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, 10);
    setExamQuestions(randomQuestions);
  }, [questions]);

  const checkAnswer = (questionIndex, selectedOptionIndex) => {
    handleCheckAnswer(questionIndex, selectedOptionIndex);
  };

  return (
    <div>
      <h2>Student Panel</h2>
      <h3>Exam Questions</h3>
      {examQuestions.map((question, index) => {
        const {
          question: questionText,
          options,
          answer,
          image,
          video,
          equation
        } = question;

        const selectedOptionIndex = selectedAnswers[index];
        const isAnswerCorrect = selectedOptionIndex === answer;

        return (
          <div key={index}>
            <p>Question: {questionText}</p>
            <ul>
              {options.map((option, optionIndex) => (
                <li key={optionIndex}>{option}</li>
              ))}
            </ul>
            {image && <img src={URL.createObjectURL(image)} alt="Question" />}
            {video && (
              <video controls>
                <source src={URL.createObjectURL(video)} />
              </video>
            )}
            {equation && <p>Equation: {equation}</p>}
            <div>
              <button
                onClick={() => checkAnswer(index, 0)}
                disabled={selectedOptionIndex !== undefined}
                style={{
                  backgroundColor:
                    selectedOptionIndex === 0
                      ? isAnswerCorrect
                        ? 'green'
                        : 'red'
                      : null
                }}
              >
                Option 1
              </button>
              <button
                onClick={() => checkAnswer(index, 1)}
                disabled={selectedOptionIndex !== undefined}
                style={{
                  backgroundColor:
                    selectedOptionIndex === 1
                      ? isAnswerCorrect
                        ? 'green'
                        : 'red'
                      : null
                }}
              >
                Option 2
              </button>
              <button
                onClick={() => checkAnswer(index, 2)}
                disabled={selectedOptionIndex !== undefined}
                style={{
                  backgroundColor:
                    selectedOptionIndex === 2
                      ? isAnswerCorrect
                        ? 'green'
                        : 'red'
                      : null
                }}
              >
                Option 3
              </button>
              <button
                onClick={() => checkAnswer(index, 3)}
                disabled={selectedOptionIndex !== undefined}
                style={{
                  backgroundColor:
                    selectedOptionIndex === 3
                      ? isAnswerCorrect
                        ? 'green'
                        : 'red'
                      : null
                }}
              >
                Option 4
              </button>
            </div>
            {selectedOptionIndex !== undefined && (
              <p>
                Your Answer: {options[selectedOptionIndex]}{' '}
                {isAnswerCorrect ? '(Correct)' : '(Incorrect)'}
              </p>
            )}
          </div>
        );
      })}
      <Quiz/>
    </div>
  );
};

export default Student;