import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import "../../src/index.css"

function CountdownComponent() {
  const [count, setCount] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Calculate the target timestamp for 7 days (7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
  const targetDate = new Date(2024, 0, 6); // January is month 0
  const targetTimestamp = targetDate.getTime();


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
    <div className="countdown">
      <p>Our online store will open in....</p>
      <div className='time-section'>
      <div className="countdown-item">
      <p className='date-heading'>DAYS</p>
        <span className='time'>{formatNumber(count.days)}</span>
  
      </div>
      <div className="countdown-item">
      <p className='date-heading'>HOURS</p>
        <span className='time'>{formatNumber(count.hours)}</span>
        
      </div><div className='dots'>:</div>
      <div className="countdown-item">
      <p className='date-heading'>MINUTES</p>
      

        <span className='time'>{formatNumber(count.minutes)}</span>
  
      </div> <div className='dots'>:</div>
      <div className="countdown-item">
      <p className='date-heading'>SECONDS</p>
        <span className="fade-in-out time">{formatNumber(count.seconds)}</span>
       
      </div>
      </div>
    </div>
  );
}

export default CountdownComponent;
