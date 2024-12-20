import React from 'react'
import contactus from './Contact-Us.png'
const Contact = () => {
  return (
    <div>
      <div className="container">
      <div className="contactus">
    <div className="contactus-container">
        <div className="contact">CONTACT US</div><br></br>
        <div className="grid-left email">
            <div className="grid-items it1">Email: </div>
            <div className="grid-items it2">contact@psr.edu.in</div>
        </div><br></br>
        <div className="grid-left phone">
            <div className="grid-items it1">Phone: </div>
            <div className="grid-items it2">80125 30321/ 80125 30323/<br></br>80125 30325</div>
        </div><br></br>
        <div className="grid-left location">
            <div className="grid-items it1">Location: </div>
            <div className="grid-items it2">P.S.R Engineering College | Sevalpatti<br></br>
                Sivakasi - 626140 | Virdhunagar(Dist)<br></br>
                Tamil Nadu | India </div>
        </div><br></br>
        <div className="grid-left fax">
            <div className="grid-items it1">Fax: </div>
            <div className="grid-items it2">04562-239284 / 04562-225261</div>
        </div><br></br>
        <div className="grid-left port">
            <div className="grid-items it1">Transport: </div>
            <div className="grid-items it2">98949 12162</div>
        </div>
    </div>
    <div className="image-contact">
      <img src={contactus}/>
    </div>
    </div><br></br><br></br>
    <div className="message-container">
      <form>
        <h4>Send Message</h4>
        <input className="detail f-name" type="text"  placeholder="First Name"/>
        <input className="detail l-name" type="text"  placeholder="Last Name"/><br></br><br></br>
        <input className="detail phone1" type="text"  placeholder="Phone Number"/><br></br><br></br>
        <input className="detail mail1" type="text" placeholder="Email"/><br></br><br></br>
        <textarea className="detail mess1" placeholder="Type your Message"></textarea><br></br><br></br>
        <button onclick="submit">Submit</button><br></br><br></br>
      </form>
    </div><br></br><br></br>
    <div className="google-map"><iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.4810130902933!2d77.69839907512633!3d9.290576190781598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06b85670932313%3A0xd8caf94254b94c1a!2sPSR%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709367131730!5m2!1sen!2sin"
        width="100%"
        height="450"
        // style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
       </iframe>
      </div>
      </div>
      </div>
  )
}

export default Contact