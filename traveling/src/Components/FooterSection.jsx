import {FiTwitter,FiFacebook,FiInstagram,} from 'react-icons/fi'
import {AiFillInstagram,AiOutlineGooglePlus} from 'react-icons/ai'
import {FaFacebookF} from 'react-icons/fa'
import {BsTwitter,BsYoutube} from 'react-icons/bs'

function Footer(){
    return(
        <div className="Footer-section">
            
            <div className="footer-icons-sec">
             <div className="footer-icon-div"><FaFacebookF className='icons icon-footer' /></div>
             <div className="footer-icon-div"><AiFillInstagram className='icons icon-footer' /></div>
             <div className="footer-icon-div"><BsTwitter className='icons icon-footer' /></div>
             <div className="footer-icon-div"><AiOutlineGooglePlus className='icons icon-footer' /></div>
             <div className="footer-icon-div"><BsYoutube className='icons icon-footer' /></div>
             

            </div>
            <hr className='hrline' />
            <div className='Companyname'>Joli Tour</div>
            <div className='pages-footer-links'>
                <div>Terms Of Use</div>
                <div>Privacy Policy</div>
            </div>
            <div className='copyright-text'>© 2023 All Rights Reserved</div>
        </div>
    )
}
export default Footer;
