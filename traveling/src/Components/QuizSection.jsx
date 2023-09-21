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
        <div  id="quiz" className="quiz-section">
            <h4>Lets Play a short game</h4>
            <div className="container video-box">
                
                  
        
<Quiz/>



            </div>
        </div>
    )
}
export default QuizSection