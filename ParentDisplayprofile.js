import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ParentDisplayprofile = () => {
   const { userId } = useParams();
  const parent=useState([]);
   const [par, setParent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/parent/${userId}`)
      .then(res => {
        setParent(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userId]);

  return (
    <div>
    <div className="bio-container">
      <h1>Profile</h1><br /><br />
      {parent.map(parents => (
        <div key={parents.id} className="profile">
          <label>Name: {parents.name}</label><br></br><br></br>
         
          <label>Phone Number: {parents.phno}</label><br></br><br></br>
          <label>Address: {parents.addr}</label><br></br><br></br>
          <label>Blood Group: {parents.bloodgrp}</label><br></br><br></br>
          <br></br><br></br><br></br><br></br> 
        </div>        
      ))}
       <br></br><br></br><br></br><br></br>  <br></br><br></br><br></br><br></br> 
    </div>
  </div>
);
}

export default ParentDisplayprofile;

