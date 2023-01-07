import { Container } from '@mui/system'
import React from 'react';
import './Home.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Home() {
  return (
    <div>
<Container  maxWidth='lg' >
<div className='home-container' >
<div className='div-one'>
    <p className='intro1'>Hello I'm Joan Kinyanjui</p>
    <p className='intro phrase'>
    
    I’m a  frontend developer working with both web2 and web3 technologies.</p>
    <div className='socials'>
        <LinkedInIcon  style={{marginRight:"20px", fontSize:'30px'}}/>
        <GitHubIcon style={{marginRight:"20px", fontSize:'30px'}} />
        <InstagramIcon  style={{marginRight:"20px", fontSize:'30px'}}/>
        <TwitterIcon style={{marginRight:"20px", fontSize:'30px'}} />
</div>
</div>
<div className='div-two'>
    <img src='/images/resumepic.jpg'  className='div-two-img'/>
</div>
</div>


</Container>
    </div>
  )
}

export default Home