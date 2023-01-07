import React from 'react'
import ContactInfo from './ContactInfo';
import './Contact.css';
import { Container } from '@mui/material';

function Contact() {
  return (
    <div className='Contact'>
<div className='Contact-container'>

<div>
  <img  className='contact-image' src='/images/contact.jpg'/>
</div>

<Container maxWidth='xl'>
  <ContactInfo />
</Container>

</div>
    </div>
  )
}

export default Contact