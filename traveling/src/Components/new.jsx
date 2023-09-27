import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import url from '../assests/download-removebg-preview (2).png';
import AOS from 'aos';

import 'aos/dist/aos.css';

const firebaseConfig = {
  apiKey: "AIzaSyCIYWdTiTYIGWa2QnCEe5LWQ_T4uEdljmE",
  authDomain: "sitetraveling-ff62c.firebaseapp.com",
  projectId: "sitetraveling-ff62c",
  storageBucket: "sitetraveling-ff62c.appspot.com",
  messagingSenderId: "761152543923",
  appId: "1:761152543923:web:8489fd90519ba9b0d124c6",
  measurementId: "G-3Q2HD11N1R"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function Quiz() {

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);
  const email1 = useRef(null);
  const email2 = useRef(null);

  const questions = [
    {
      question: "Do you plan to come to Paris in 2024?",
      options: ["Yes", "No"],
    },
    {
      question: "How often did you come to Paris?",
      options: ["1 Time", "2 Times", "3 Times","More Than 3 Times" ,"Never Been In Paris"],
    },
    {
      question: "How many days are you planning to stay in Paris?",
      options: ["3-4 Days", "5-7 Days", "1 Weekend","8-10 Days","15-20 Days"],
    },
    {
      question: "How much do you plan to spend during your stay in Paris (Except Hotel)?",
      options: ["$200-$300", "$300-$500", "$500-$700","$800-$1000","I have No Limit"],
    },
    {
      question: "Would you be alone or accompanied?",
      options: [ "With family", "With friends", "Alone (by myself)",],
    },
  ];


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAosEnabled, setIsAosEnabled] = useState(true);
  const [thanksmessage, setthanksmessage] = useState(false);
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
  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption(userResponses[currentQuestionIndex - 1]);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const HandleSubmit = async () => {
    const FirstEmail = email1.current.value;
    const SecondEmail = email2.current.value;
    if(FirstEmail == "" || SecondEmail == "" ){
    alert("adsadssd")
    }
else{
  const docRef = await addDoc(collection(db, "Users"), {
    YourEmail: FirstEmail,
    YoourLovedOnesEmail: SecondEmail,
    answers: answers,
  });
  console.log("Document written with ID: ", docRef.id);
  setthanksmessage(true);
}
  };

  return (
    <div>
      <div>
        {currentQuestionIndex < questions.length && showInput ? (
          <div id="quiz"  className='Questions-div'>
            <p>{currentQuestionIndex + 1}/5</p>
            <p>{questions[currentQuestionIndex].question}</p>
            <div className='options-div'>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div
                data-aos={isAosEnabled ? "fade-up" : null}
                data-aos-duration="2000"
                className={`option ${selectedOption === option ? 'selected-option' : ''}`}
                onClick={() => {
                  handleOptionClick(option);
                  setIsAosEnabled(false); // Disable AOS on click
                }}
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
              
              {currentQuestionIndex > 0 && (
                <button
                  className='back-button'
                  onClick={() => {
                    handleBack();
                  }}
                >
                  Back
                </button>
              )}
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
        ) : thanksmessage ? (
          <div className='thank-you-message'>
            <div><img src={url} alt="" width={"150px"} /></div>
            <p>Thank you for your submission!</p>
          </div>
        ) : (
          <div className='email-div row'>
            <div data-aos="fade-right" data-aos-duration="2000"  className='col-md-6 col-sm-6'>
           
    <div className="label-div"> <label htmlFor="">Your Email</label></div>
              <input ref={email1} className='email-input' type='email' placeholder='Enter Your Email'></input>
            </div>
            <div data-aos="fade-left" data-aos-duration="2000"  className='col-md-6 col-sm-6'>
             
            <div className="label-div"> <label htmlFor="">Your Loved One's Email</label></div>

              <input ref={email2} className='email-input' type='email' placeholder="Enter Your Loved One's Email"></input>
            </div>
            <div data-aos="fade-up" data-aos-duration="2000"  className='col-md-12'>
              <button onClick={HandleSubmit} className='Submit-btn'>Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
