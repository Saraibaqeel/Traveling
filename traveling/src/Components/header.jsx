import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Countdown from 'react-countdown';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState,useEffect } from 'react';
import CountdownComponent from './Countdown';
import { AiOutlineInstagram } from 'react-icons/ai';
import VideoSection from './VideoSection';

import {FiTwitter,FiFacebook,FiInstagram} from 'react-icons/fi'

function Header() {
    const [count, setCount] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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
    <div className='herosection'>
        <div className='icon-box'>
            <div> <FiInstagram className='icons' /></div>
       
            <div>  <FiFacebook className='icons'/></div>
            <div>     <FiTwitter className='icons'/></div>
      
   
        </div>
    <Navbar expand="lg" className="bg-body-tertiary Nav-bar">
      <Container fluid>
        <Navbar.Brand  href="#" className="Nav-bar">Logo</Navbar.Brand>
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
    </Navbar>
    <h3 className='comingsoon' >Our online store will open in....</h3>
<CountdownComponent/>


    </div>

    </div>
  );
}

export default Header;