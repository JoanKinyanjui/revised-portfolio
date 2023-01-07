import { Container } from '@mui/system'
import React from 'react';
import './About.css';

function About() {
  return (
    <div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,128L40,112C80,96,160,64,240,90.7C320,117,400,203,480,202.7C560,203,640,117,720,106.7C800,96,880,160,960,170.7C1040,181,1120,139,1200,112C1280,85,1360,75,1400,69.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000000" fill-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,256C384,235,480,149,576,106.7C672,64,768,64,864,96C960,128,1056,192,1152,202.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg> */}
        {/* <svg width="100%" height="0%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 79.70256410256411,217.4794871794872 159.40512820512822,234.95897435897436 240,220 C 320.5948717948718,205.04102564102564 402.0820512820512,157.64358974358976 482,145 C 561.9179487179488,132.35641025641024 640.2666666666668,154.46666666666667 727,184 C 813.7333333333332,213.53333333333333 908.8512820512819,250.48974358974357 983,265 C 1057.148717948718,279.51025641025643 1110.3282051282051,271.574358974359 1183,257 C 1255.6717948717949,242.42564102564103 1347.8358974358976,221.2128205128205 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#000000" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg> */}
        <Container maxWidth='xl'>
<div className='About-div'>
{/* here */}
<div className='about-content'>
<h2 >About me</h2>
<p>I am a front-end developer located in Nairobi ,Kenya.I have serious passion for creating attractive, user-friendly, easy to use and responsive 
   designs for websites,webapps and applications.My interest lies in the whole front-end spectrum and working on ambitious projects for creative and positive people. This site is a place for me to showcase some of my projects. I am a well-organised person, an independent employee with high attention to detail which makes me an amazing problem-solver. In terms of non-computer hobbies ,I am an outdoor person who loves travelling and exploring nature.I also fancy watching movies.My professional background may have taken many twists and turns from being an economics graduate to finally settling for code . As a web developer, I enjoy using my unequivocal love for making things, and my mission-driven work ethic to literally change the world. That's why I am excited to make a big
   impact at a high growth company.</p>
<div className='about-skills'>
  <div className='about-skills-list' >
    <h5>~Frontend~</h5>
    <ul>
      <li>React js</li>
      <li>Javascript</li>
      <li>HTML & CSS</li>
      <li>Gatsby</li>
      <li>Next js</li>
      <li>Tailwind || Bootstrap || Material UI || Saas</li>
    </ul>
  </div>
  <div className='about-skills-list'>
  <h5>~Backend~</h5>
  <ul>
    <li>Node js</li>
    <li>Exppress js</li>
 
  </ul>
  </div>
  <div className='about-skills-list'>
  <h5>~Blockchain~</h5>
  <ul>
    <li>Solidity</li>
  </ul>
  </div>
</div>
</div>
<div className='about-img'>
  <img  className='about-actual-img' src='/images/gradpic3.jpg'/>
</div>
</div>

        </Container>
        <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 76.49230769230769,238.62051282051283 152.98461538461538,277.24102564102566 220,263 C 287.0153846153846,248.75897435897437 344.55384615384617,181.65641025641023 435,176 C 525.4461538461538,170.34358974358977 648.8,226.13333333333333 734,221 C 819.2,215.86666666666667 866.246153846154,149.81025641025641 942,140 C 1017.753846153846,130.18974358974359 1122.2153846153844,176.62564102564104 1210,196 C 1297.7846153846156,215.37435897435896 1368.892307692308,207.6871794871795 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#C0C0C0" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
    </div>
  )
}

export default About