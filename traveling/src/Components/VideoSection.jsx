import url from '../assests/videos/Paris.mp4'
function VideoSection(){
    return(
        <div className="video-section">
            <h4>Your Adventure Starts Now</h4>
            <div className="container video-box">
                <div className="row">
                  
              
  
  <div className='col-md-6 col-lg-16 col-sm-12 first-div' >
 <h4 className='down-heading'>Explore With Us</h4>
 <p className='down-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quidem aut voluptas alias. Eos error perferendis eligendi eaque maiores. Non numquam corrupti totam voluptate est esse sint expedita, ab accusamus!</p>
  <button className='more-button'>MORE ABOUT US</button>
  </div>
  <div className='col-md-6 col-lg-16 col-sm-12 video-div' >
  <video controls autoPlay>
        <source src={url} type="video/mp4" />
        {/* Add additional source elements for different video formats */}
      </video>
  </div>



                </div>
            </div>
        </div>
    )
}
export default VideoSection;