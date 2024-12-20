
import React from 'react'
import Markdetails from './Markdetails'
import { Link, NavLink } from 'react-router-dom'
const Result = () => {
  return (
       
    <div>
        <div className="container">
      <div className="res-container">
        <div className="res">
            <h2>&emsp;&emsp;Result</h2><br></br>
            <p>&emsp;&emsp;&emsp;&#8594;&emsp;&emsp;Nov-Dec 2023 End Sem Result -- <a href="https://www.google.com"> click here! </a></p>
        </div>
        <br></br>
      </div>
    <div className="google-map">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.4810130902933!2d77.69839907512633!3d9.290576190781598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b85670932313%3A0xd8caf94254b94c1a!2sPSR%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709367131730!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
       </iframe>
       <br></br>
      </div>
    </div>
    </div>
  )
}

export default Result