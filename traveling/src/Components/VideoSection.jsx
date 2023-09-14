function VideoSection(){
    return(
        <div className="video-section">
            <h4>Your Adventure Starts Now</h4>
            <div className="container video-box">
                <div className="row">
                  
                <div className="col-md-12 ">
  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe
    className="iframe-box"
      width="100px"
      height="500px"
      src="https://www.youtube.com/embed/YPMOce2VdKQ"
      title="Travel Paris in a Minute - Aerial Drone Video | Expedia"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      style={{ position: 'absolute', top: 0, left: 0, width: '500px', height: '400px' }}
    ></iframe>
  </div>
</div>


                </div>
            </div>
        </div>
    )
}
export default VideoSection;