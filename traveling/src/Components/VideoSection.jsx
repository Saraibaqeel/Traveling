import url from '../assests/welcome.jpeg'
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';


function VideoSection(){
    useEffect(() => {
        AOS.init(); // Initialize AOS when the component mounts
      }, []);
    return(
        <div className="video-section">
            <h4 data-aos="fade-up" data-aos-duration="2000" >Your Adventure Starts Now</h4>
            <div className="container video-box">
                <div className="row">
                  
              
  
  <div data-aos="fade-up" data-aos-duration="1500" className='col-md-12 col-lg-6 col-sm-12 first-div' >
 <h4 className='down-heading'>Explore With Us</h4>
 <p className='down-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quidem aut voluptas alias. Eos error perferendis eligendi eaque maiores. Non numquam corrupti totam voluptate est esse sint expedita, ab accusamus!</p>
  <button className='more-button'>MORE ABOUT US</button>
  </div>
  <div data-aos="fade-down" data-aos-duration="1500" className='col-md-12 col-lg-6 col-sm-12 video-div' >
 <img src={url} alt="" width={"98%"} height={"98%"} />
  </div>



                </div>
            </div>
        </div>
    )
}
export default VideoSection;