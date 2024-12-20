import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FacDisplayprofile = () => {
   const { userId } = useParams();
  const faculty=useState([]);
   const [facu, setFac] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/faculty/${userId}`)
      .then(res => {
        setFac(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userId]);

  return (
    <div>
    <div className="bio-container">
      <h1>Profile </h1><br /><br />
      {faculty.map(facultyy => (
        <div key={facultyy.id} className="profile">
          <label>Name : {facultyy.facname}</label><br></br><br></br>
          <label>Department :  {facultyy.facDept}</label><br></br><br></br>
          <label>Designation : {facultyy.facdes}</label><br></br><br></br>
          <label>Gender : {facultyy.facGender}</label><br></br><br></br>
          <label>Phone Number: {facultyy.facPhno}</label><br></br><br></br>
          <label>Address: {facultyy.facAddr}</label><br></br><br></br>
          <label>Blood Group: {facultyy.facbloodgrp}</label><br></br><br></br>
          <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br>
          <br></br><br></br><br></br><br></br> <br></br><br></br><br></br><br></br>
        </div>
      ))}
     
    </div>
  </div>
);
}

export default FacDisplayprofile;

