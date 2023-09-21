import url from '../assests/Joli Tour.png'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';


function Qrsection(){
    useEffect(() => {
        AOS.init(); // Initialize AOS when the component mounts
      }, []);
    return(
        <div className="video-section qr-box">
            <h4>Qr Code</h4>
            <div className="container video-box">
                <div className="row">
                  
              
  
  <div className='col-md-12 col-lg-12 col-sm-12 first-div' >
    <img src={url} alt="" width={"200px"} />
 <h4 className='down-heading'>Scan Qr Code</h4>
  <a href="https://jolitour.netlify.app/#quiz"><button className='more-button'>Visit</button></a>
  

  </div>
  



                </div>
            </div>
        </div>
    )
}
export default Qrsection;