import ReCAPTCHA from "react-google-recaptcha";
import EmailForm from "./email";
import { useState } from "react";


function Recaptch(){

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
    return(
        <div className="recaptch-section">
            
         <form onSubmit={handleSubmit}>
            
                   
            <ReCAPTCHA
        sitekey="6LeKY0ooAAAAAE0i6Hk4ZoF_bucmKOyKP8g22U6l"
        onChange={handleRecaptchaChange}
      />

    </form>

        </div>
    )
}
export default Recaptch;