import ReCAPTCHA from "react-google-recaptcha";
import EmailForm from "./email";


function Recaptch(){

    const handleSubmit = (e) =>{
        e.preventDefault();
       console.log(e.target.value);
        
   
    }
    return(
        <div className="recaptch-section">
            
         <form onSubmit={handleSubmit}>
            
                   
            <ReCAPTCHA
        sitekey="6LeKY0ooAAAAAE0i6Hk4ZoF_bucmKOyKP8g22U6l"
      
      />

    </form>

        </div>
    )
}
export default Recaptch;