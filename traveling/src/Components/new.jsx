import React, { useState, useEffect } from 'react';


function Quiz() {
  const questions = [
    {
      question: "Do you plan to come to Paris in 2024?",
      options: ["Yes", "No", "Not sure"],
    },
    {
      question: "How often did you come to Paris?",
      options: ["Frequently", "Once", "Never"],
    },
    {
      question: "How many days are you planning to stay in Paris?",
      options: ["1-3 days", "4-7 days", "More than a week"],
    },
    {
      question: "How much do you plan to spend during your stay in Paris (Except Hotel)?",
      options: ["Less than $1000", "$1000-$3000", "More than $3000"],
    },
    {
      question: "Would you be alone or accompanied?",
      options: ["Alone", "With family", "With friends", "Other"],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState(Array(questions.length).fill(null));
  const [showInput, setShowInput] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]); // Array to store selected answers

  useEffect(() => {
    if (selectedOption !== null) {
      // Push the selected option to answers array when selectedOption changes
      setAnswers((prevAnswers) => [...prevAnswers, selectedOption]);
    }
  }, [selectedOption]);

  const handleNext = () => {
    // Update userResponses for the current question
    setUserResponses((prevResponses) => [
      ...prevResponses.slice(0, currentQuestionIndex),
      selectedOption,
      ...prevResponses.slice(currentQuestionIndex + 1),
    ]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option
    } else {
      // Quiz is complete, you can handle the results here
      setShowInput(false);
      console.log("All Answers:", answers); // Log all selected answers
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <div>
        {currentQuestionIndex < questions.length && showInput ? (
          <div className='Questions-div'>
            <p>{currentQuestionIndex + 1}/5</p>
            <p>{questions[currentQuestionIndex].question}</p>
            <div className='options-div'>
              {questions[currentQuestionIndex].options.map((option, index) => (
                
                  <div
                    // Apply the selected-option class if this option is selected
                    className={`option ${selectedOption === option ? 'selected-option' : ''}`}
                    onClick={() => handleOptionClick(option)}
                  >
                    <input
                      type="radio"
                      name="response"
                      value={option}
                      checked={selectedOption === option}
                      onChange={() => {}}
                    />
                    &nbsp;
                    <span>{option}</span> 
                  </div>
           
              ))}
            </div>
            <div className='next-btn-div'>
              <button
                className='next-button'
                onClick={() => {
                  handleNext();
                }}
                disabled={selectedOption === null}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className='email-div'>
            <input className='email-input' type='email' placeholder='Enter Email'></input>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
