import React from 'react'
import abtlogo from './logo.webp'
import corresponent from './corresponent.jpg'
import principle from './principle.jpg'

const About = () => {
  return (
    <div>
      <div className="aboutus-subcontainer">
      <div className="picture logo">
          <img src={abtlogo} height="250px" width="250px" alt="logo"/>
      </div>
      <div className="description">
          <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The College offers a set of 9 courses for the undergraduation programme (UG) and nearly 5 courses for the postgraduation programme (PG).
          The set of courses offered in the institution are affilitated to Anna University and approved by AICTE , New Delhi.
          P.S.Ramasamy Naidu. It was established in the year 1998 with the noble mission to promote engineering education in backward area of Virudhunagar District.
          PSREC institution are committed to scripting a unique chapter of excellence an education and research, in vital fields like Engineering, IT and Management.
          <br></br><br></br>
          <strong>&emsp;<ins>About the Trust:</ins></strong>
          &emsp;The college is run by P.S.Ramasamy Telugu Minority Educational and Charitable Trust, Sivakasi and administered by Thiru R.Solaisamy Correspondent & Managing Trustee.
          Their valuable service in providing Quality technical education to the backward rural area is proving the social cause of running this institution
          </p>
       <br></br><br></br>
       </div>
    <div className="picture corresponent">
      <div><h1>Correspondent</h1></div>
      <div><img src={corresponent} height="250px" width="250px" alt="corresponent"/><br></br></div>
      </div>
      <div className="description">
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Emergence of India as Knowledge super power in the recent years is now being well acknowledged. India's rapid growth could be possible if the rural youth is uplifted, fed them into mainstreams of the development path and establishment of institution of higher learning.
      Today, the need has been greater for a skilled workforce across many industries in order to stay competitive in an increasingly global and technological marketplace.
      <br></br><br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;In recognition to that, <strong>P.S.R. Engineering College</strong> was founded in the year 1998 with the intention of providing technical knowledge to the rural youth and uplifting them into the nation’s building process.
      The challenge that we have at hand is the challenge of transforming the engineering education system into a system of nurturing world-className quality in human capital development, mutually with the development
      of intellectual and knowledge capital to support country's march towards the economic and industrial development.
      <br></br><br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;The P.S.R. Engineering College, as a well-known technical institution, was striving its best to impart knowledge and thereby expertise to fulfill the
      diversified needs of the society.<br></br><br></br>&emsp;&emsp;&emsp;&emsp;&emsp;I wish to seek your continuous support to make this institution as a "University of Excellence".
      <br></br><br></br>
      <strong>R.Solaisamy<br></br><br></br><ins>CORRESPONDENT</ins></strong>
      </p>
    </div><br></br>
    <div className="picture Principal">
      <div><h1>&emsp;Principal</h1></div>
      <div><img src={principle} height="250px" width="250px" alt="principle"/><br></br></div>
    </div>
    <div className="description">
      <p>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;I am delighted to welcome you to <strong>PSR Engineering College (Autonomous)</strong>, run by P S Ramasamy Telugu Minority Educational & Charitable Trust, Sivakasi, Tamilnadu.
      The College has a rich tradition of rising a high academic excellence and overall personal growth of the students.
      The purpose of the technical education is to create our students as a valuable resource for an industry with humanity.
      This is achieved by providing them an excellent academic environment, state of-the-art infrastructure, modern laboratories and highly qualified dedicated faculty members with the decades of teaching and industrial experience.
      <br></br><br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;PSR Engineering College is a challenging and exciting place offering the chances to learn. To refine the necessary, inter and intrapersonal skills to achieve placements in corporate sector,
      the Institute is supportive to the students by arranging periodical tests and group interaction exercises. We endeavour to equip our students with both technical and management skills,
      so that they may contribute to the industry being an excellent professional. I am proud of the exceptional body of teaching staff, enlighten the students in a wide range of learning opportunities.
      I would warmly welcome you to visit the college and experience the availability of resources all that PSR Engineering College has to offer
      <br></br><br></br>
      <strong>Dr.J.S.Sentil Kumar<br></br><br></br><ins>PRINCIPAL</ins></strong>
      </p><br></br><br></br><br></br>
    </div>
    </div>
    </div>
  )
}

export default About
