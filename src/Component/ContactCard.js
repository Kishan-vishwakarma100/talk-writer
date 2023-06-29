import React from 'react';
import ContactForm from './ContactForm';
import './Contact.css';

const ContactCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>Contact Us</h3>
      </div>
      <div className="card-body">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactCard;
