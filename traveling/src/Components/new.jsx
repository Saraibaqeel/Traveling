import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import url from '../assests/download-removebg-preview (2).png';
import ReCAPTCHA from "react-google-recaptcha";
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
  const [isRecaptchaChecked, setIsRecaptchaChecked] = useState(false);


  const handleRecaptchaChange = (value) => {

    const isChecked = Boolean(value);
    setIsRecaptchaChecked(isChecked);

 
    if (isChecked) {
      console.log(true);
    }
  };
  const handleSubmit = (e) =>{
      e.preventDefault();
     console.log(e.target.value);
      
 
  }

  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);
  const email1 = useRef(null);
  const email2 = useRef(null);

  const questions = [
    {
      question: "Do you plan to come to Paris in 2024?",
      options: ["Yes", "No"],
      src:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    },
    {
      question: "How often did you come to Paris?",
      options: ["1 Time", "2 Times", "3 Times","More Than 3 Times" ,"Never Been In Paris"],
      src:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    },
    {
      question: "How many days are you planning to stay in Paris?",
      options: ["3-4 Days", "5-7 Days", "1 Weekend","8-10 Days","15-20 Days"],
      src:"data:image/jpeg;base64,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"
    },
    {
      question: "How much do you plan to spend during your stay in Paris (Except Hotel)?",
      options: ["$200-$300", "$300-$500", "$500-$700","$800-$1000","I have No Limit"],
      src:"https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_1280.jpg"
    },
    {
      question: "Would you be alone or accompanied?",
      options: [ "With family", "With friends", "Alone (by myself)",],
      src:"https://media.istockphoto.com/id/1345426734/photo/eiffel-tower-paris-river-seine-sunset-twilight-france.jpg?s=612x612&w=0&k=20&c=I5rAH5d_-Yyag8F0CKzk9vzMr_1rgkAASGTE11YMh9A="
    },
  ];


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isAosEnabled, setIsAosEnabled] = useState(true);
  const [errormsg, seterrormsg] = useState(false);
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
      seterrormsg(true)
    }
else{
  seterrormsg(false)
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
            <div className='question-main-div'>
           
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
            <div  className='options-image'  data-aos={"fade-right"} 
                data-aos-duration="5000"><img src={questions[currentQuestionIndex].src} alt="" width={"100%" } height={"100%"}  /></div>
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
             {errormsg ? <p className='error-msg'>Please Fill Both Feilds</p> : ''}
            <div className="recaptch-section">
            
            <form onSubmit={handleSubmit}>
               
                      
               <ReCAPTCHA
           sitekey="6LeKY0ooAAAAAE0i6Hk4ZoF_bucmKOyKP8g22U6l"
           onChange={handleRecaptchaChange}
         />
   
       </form>
   
           </div>
              <button onClick={HandleSubmit}  disabled={!isRecaptchaChecked} className='Submit-btn'>Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
