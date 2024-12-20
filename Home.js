import React from 'react'
import vision from './vision.png'
import mision from './mission.png'
import values from './values.png'

const Home = () => {
  return (
    <div>
      <div class="container">
          <div class="home-subcontainer">
      <div class="content vision">
        <h2>&emsp;&ensp;Vision</h2>
        <p> &emsp; &emsp;To contribute to society by providing excellence in<br></br><br></br>
             technical education with upholding societal ideals, resulting in a <br></br><br></br>
             valued resource for industry and humanity.</p>
     </div>
     <div class="content logo">
        <img src={vision} height="200px" width="400px" alt="vision"/>
     </div>
     
     <div class="content mission">
        <div class="mission m1"><h2>&emsp;&ensp;Mission</h2><p>&emsp; &emsp;<span>&#8594;</span>&ensp; To create an ambiance for quality learning experience <br></br><br></br>&emsp;&emsp;&emsp;&ensp;&ensp; by providing sustained care and facilities.</p></div>
        <div class="mission m2"><p>&emsp; &emsp;<span>&#8594;</span>&ensp; To offer higher level training encompassing both theory<br></br><br></br>&emsp;&emsp;&emsp;&ensp;&ensp;and practices with human and social values.</p></div>
        <div class="mission m3"><p>&emsp; &emsp;<span>&#8594;</span>&ensp; To provide knowledge based services and professional <br></br><br></br>&emsp;&ensp;&ensp;&emsp; &emsp;skills to adapt tomorrow's technology and embedded<br></br><br></br>&emsp;&emsp;&ensp;&ensp;&emsp; global changes.</p></div>
     </div> 
     <div class="content logo">
      <img src={mision} height="200px" width="400px" alt="mision"/>
    </div>
     <div class="content corevalues">
        <h2>&emsp;&emsp;Core Values</h2>
        <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span>&#8594;</span> Quality</p>
        <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span>&#8594;</span> Teamwork</p>
        <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span>&#8594;</span> Transparency & Integrity</p>
        <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span>&#8594;</span> Societal Services</p>
        <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<span>&#8594;</span> Woman Empowerment</p>
     </div>
     <div class="content logo">
        <img src={values} height="200px" width="400px" alt="values"/>
     </div>
      </div>
    </div>
    </div>
  )
}

export default Home