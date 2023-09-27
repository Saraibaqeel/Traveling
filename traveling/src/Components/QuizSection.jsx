import {useEffect} from 'react';
import Quiz from "./new"


function QuizSection(){
  useEffect(() => {
    // Scroll to the "quiz" section when the component is mounted
    console.log(window.location.href)
    if(window.location.href.includes('quiz')){
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth' });
    }
}
else{
    
}
  }, []);
    return(
        <div   className="quiz-section">
            <h4 id='quiz' >Answer to this small quiz and stand a chance to win an exciting trip in Paris</h4>
            <div  className="container video-box">
                
                  
        
<Quiz  />



            </div>
        </div>
    )
}
export default QuizSection