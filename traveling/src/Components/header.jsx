
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Countdown from 'react-countdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState,useEffect,useRef } from 'react';
import CountdownComponent from './Countdown';
import {AiOutlineSearch } from 'react-icons/ai';
import VideoSection from './VideoSection';
import url from '../assests/videos/hero.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {FiTwitter,FiFacebook,FiInstagram} from 'react-icons/fi'
import {RxHamburgerMenu} from "react-icons/rx"

function Header() {
  const videoRef = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    AOS.init(); // Initialize AOS when the component mounts
  }, []);
    const [count, setCount] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [scrolling, setScrolling] = useState(false);
    const [imageSrc, setImageSrc] = useState(
      'https://blossomthemesdemo.com/blossom-travel-pro/wp-content/uploads/sites/33/2019/09/logo-light_e5b56f0083144d8573137039e2559c76-1.png'
    );

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
      if (videoRef.current) {
        videoRef.current.autoplay = true;
        videoRef.current.loop = true;
      }
    }, []);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
        // setImageSrc('https://blossomthemesdemo.com/blossom-travel-pro/wp-content/uploads/sites/33/2019/09/logo-light_6da742f4f2cd111344a9ce86942eecd6.png');
      document.getElementById('logo-text').style.color="black"
      } else {
        setScrolling(false);
        // setImageSrc(
        //   'https://blossomthemesdemo.com/blossom-travel-pro/wp-content/uploads/sites/33/2019/09/logo-light_e5b56f0083144d8573137039e2559c76-1.png'
        // );
        document.getElementById('logo-text').style.color="white"
      }
    };
    const targetTimestamp = Date.now() + 7 * 24 * 60 * 60 * 1000;
    useEffect(() => {
        const interval = setInterval(() => {
          const currentTime = Date.now();
          const remainingTime = targetTimestamp - currentTime;
    
          if (remainingTime <= 0) {
            clearInterval(interval);
            return;
          }
    
          const seconds = Math.floor((remainingTime / 1000) % 60);
          const minutes = Math.floor((remainingTime / 1000 / 60) % 60);
          const hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
          const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    
          setCount({ days, hours, minutes, seconds });
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
      }, []);
      const formatNumber = (num) => {
        // Add leading zeros to numbers less than 10 for a consistent width
        return num < 10 ? `0${num}` : num;
      };
   

  return (
    <div>
          
    {/* <Navbar expand="lg" className={`top-navbar ${scrolling ? 'scrolling' : ''} bg-body-tertiary Nav-bar customnav`} >
      <Container fluid>
        <Navbar.Brand  href="#" id='logo-text' className="Nav-bar mybar"> Joli Tour </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
          
          </Nav>
          <Form className="d-flex nav-rightdiv">
           <div className='nav-rightlist'>Home</div>
             <div className='nav-rightlist'>About Us</div>
             <div className='nav-rightlist'>Contacts</div>
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    <div className={`top-navbar ${scrolling ? 'scrolling' : ''} bg-body-tertiary Nav-bar customnav customnav1 desktop-nav`} >
      <div className='nav-right'>
        <div className='seacrh-input-div'>
       <AiOutlineSearch className='search-icon'/>
      <input type="text" className='search-input' placeholder='Search' />
      </div>
      </div>
      <div className='nav-center'>
      <ul className='children-div'>
        <li>Home</li>
        <li>Blog</li>
        <li>Portfolio</li>
      </ul>
           <p id='logo-text'>Joli Tour</p>
           <ul className='children-div'>
        <li>Travel</li>
        <li>Pages</li>
        <li>Contact</li>
      </ul>
      </div>
      <div className='nav-left'>
        <div className='top-icon'>
        <div > <FiInstagram className='icons1' /></div>
       
       <div>  <FiFacebook className='icons1'/></div>
       <div>     <FiTwitter className='icons1'/></div>
        </div>
      </div>
    </div>
    <div className={`top-navbar ${scrolling ? 'scrolling' : ''} bg-body-tertiary Nav-bar customnav customnav1 mobile-nav`} >
      <div className='nav-right'>
      <p id='logo-text'>Joli Tour</p>
      </div>
    
      <div className='nav-left'>
        <RxHamburgerMenu className='hamburger' onClick={handleShow} />
   

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>



      </div>
    </div>
    
    <div  className='herosection'>
    <video  ref={videoRef} className='video-tab'  width="100%"autoPlay loop >
    <source src={url} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    
<CountdownComponent/>


    </div>
    <div  data-aos="fade-down"
     data-aos-duration="2000"  className='icon-box'>
            <div> <FiInstagram className='icons' /></div>
       
            <div>  <FiFacebook className='icons'/></div>
            <div>     <FiTwitter className='icons'/></div>
      
   
        </div>
    </div>
  );
}

export default Header;