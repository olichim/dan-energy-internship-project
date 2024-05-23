



// Contact.js
import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return ( 
     <>
    <div className="contact-container"></div>
   
     
      <form onSubmit={handleSubmit}>
      <h2>Send Your feedback</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
        Message:
          <input type="text" value={subject} onChange={(event) => setSubject(event.target.value)} />
        </label>
        {/* <label>
          Message:
          <textarea value={message} onChange={(event) => setMessage(event.target.value)} />
        </label> */}
        <button type="submit">Send</button>
      </form>
      </>
  );
};

export default Contact;
