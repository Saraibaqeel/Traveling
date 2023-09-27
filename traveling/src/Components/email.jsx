import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function EmailForm() {
  const [toEmail, setToEmail] = useState('');
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    // Your EmailJS service ID
    const serviceId = 'service_t68h7fh';

    // Your EmailJS template ID
    const templateId = 'template_6qdoavr';

    // Your EmailJS user ID/API key
    const userId = 'd8fRpKDUjmwmu6B-C';

    const templateParams = {
      to_email: toEmail,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Email sending failed!');
      });
  }

  return (
    <div>
      <h2>Send Email</h2>
      <form onSubmit={sendEmail}>
        <div>
          <label htmlFor="toEmail">Recipient Email:</label>
          <input
            type="email"
            id="toEmail"
            name="to_email"
            value={toEmail}
            onChange={(e) => setToEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Email</button>
      </form>
    </div>
  );
}

export default EmailForm;
