import React, { useState } from 'react';


const Admin = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    answer: 0,
    image: null,
    video: null,
    equation: '',
  });

  const handleQuestionChange = (e) => {
    setCurrentQuestion({
      ...currentQuestion,
      question: e.target.value,
    });
  };

  const handleOptionChange = (e, index) => {
    const updatedOptions = [...currentQuestion.options];
    updatedOptions[index] = e.target.value;

    setCurrentQuestion({
      ...currentQuestion,
      options: updatedOptions,
    });
  };

  const handleAnswerChange = (e) => {
    setCurrentQuestion({
      ...currentQuestion,
      answer: parseInt(e.target.value),
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setCurrentQuestion({
      ...currentQuestion,
      image: file,
    });
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setCurrentQuestion({
      ...currentQuestion,
      video: file,
    });
  };

  const handleEquationChange = (e) => {
    setCurrentQuestion({
      ...currentQuestion,
      equation: e.target.value,
    });
  };

  const handleQuestionSubmit = () => {
    setQuestions([...questions, currentQuestion]);
    setCurrentQuestion({
      question: '',
      options: ['', '', '', ''],
      answer: 0,
      image: null,
      video: null,
      equation: '',
    });
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <h3>Add Question</h3>
        <label>Question:</label>
        <input
          type="text"
          value={currentQuestion.question}
          onChange={handleQuestionChange}
        />
        <br />
        <label>Options:</label>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(e, index)}
            />
          </div>
        ))}
        <label>Correct Answer:</label>
        <select value={currentQuestion.answer} onChange={handleAnswerChange}>
          {currentQuestion.options.map((_, index) => (
            <option key={index} value={index}>
              {index + 1}
            </option>
          ))}
        </select>
        <br />
        <label>Upload Image:</label>
        <input type="file" onChange={handleImageUpload} />
        <br />
        <label>Upload Video:</label>
        <input type="file" onChange={handleVideoUpload} />
        <br />
        <label>Equation:</label>
        <input
          type="text"
          value={currentQuestion.equation}
          onChange={handleEquationChange}
        />
        <br />
        <button onClick={handleQuestionSubmit}>Add Question</button>
      </div>
      <div>
        <h3>All Questions</h3>
        {questions.map((question, index) => (
          <div key={index}>
            <p>Question: {question.question}</p>
            <p>Options: {question.options.join(', ')}</p>
            <p>Answer: {question.answer + 1}</p>
            {question.image && (
              <img src={URL.createObjectURL(question.image)} alt="Question" />
            )}
            {question.video && (
              <video controls>
                <source src={URL.createObjectURL(question.video)} />
              </video>
            )}
            <p>Equation: {question.equation}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;