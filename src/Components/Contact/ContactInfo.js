import { Container } from '@mui/material';
import React from 'react';
import './Contact.css';

function ContactInfo() {
  return (
    <div className='contact-Info'>
        <p className='contact-head'>Let's Work Together. Get in Touch Using the Form Below.</p>
<Container maxWidth='xl'>
<form className='contact-form'>
<div className='contact-div'>
<label className='label' >Name*</label><br />
    <input placeholder='first name' type='text' style={{marginBottom:"5px"}}/>
    <input  placeholder='last name' type='text'/>
</div>  

<div className='contact-div'>
<label className='label'>Email*</label><br />
    <input placeholder='email' type='text' />
</div>  

<div className='contact-div'>
<label className='label'>Write a message to me*</label><br />
    <textarea placeholder='message' rows='10' cols='28'></textarea>
</div>

<div className='contact-div'>
<input  type='submit' value='SUBMIT' style={{border:"none", padding:"10px 20px",borderRadius:"5px", backgroundColor:"black",color:'white'}}/>
</div>

</form>

        </Container>
    </div>
  )
}

export default ContactInfo