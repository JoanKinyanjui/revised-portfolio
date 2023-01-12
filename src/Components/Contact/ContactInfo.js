import { Container } from '@mui/material';
import React, { useState ,useRef} from 'react';
import './Contact.css';

//Emailjs
import emailjs from '@emailjs/browser';


function ContactInfo() {
  const form = useRef()
  const [name,setName] = useState('');
  const [subject,setSubject] = useState('');
  const [email,setEmail]= useState('');
  const [message,setMessage]= useState('');
  

  const onChangeName =(e)=>{
    setName(e.target.value);
  }

  const onChangeSubject=(e)=>{
    setSubject(e.target.value);
  }
  const onChangeEmail=(e)=>{
    setEmail(e.target.value)
  }
  const onChangeMessage=(e)=>{
    setMessage(e.target.value)
  }
 
  //New Code
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s5gdwtd', 'template_wzpxwbp', form.current, 'user_M3OkvHhWZRUxYzUqSmhlQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.preventDefault();
      setName('')
      setSubject('')
      setEmail('')
      setMessage('')
      console.log(name,subject,email,message)
  };

   return (
    <div className='contact-Info'>
        <p className='contact-head'>Let's Work Together. Get in Touch Using the Form Below.</p>
<Container maxWidth='xl'>
 <form ref={form} className='contact-form'  onSubmit={sendEmail}>
  <div className='contact-div'>
<label className='label' >Name*</label><br />
    <input 
    placeholder='Your Name'
    name="user_name" 
    type='text' 
    value={name}
    onChange={onChangeName}
    style={{marginBottom:"5px"}}/>
    <label className='label' >Subject*</label><br />
    <input  
    placeholder='subject' 
    type='text'
    name="subject" 
    value={subject}
    onChange={onChangeSubject}
    />
</div>  

<div className='contact-div'>
<label className='label'>Email*</label><br />
    <input 
    placeholder='email' 
    name="user_email"
    type='text'
    value={email}
    onChange={onChangeEmail}
     />
</div>  

<div className='contact-div'>
<label className='label'>Write a message to me*</label><br />
    <textarea 
    placeholder='message'
    name="message"
    value={message} 
    onChange={onChangeMessage}
    rows='10' cols='28'></textarea>
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