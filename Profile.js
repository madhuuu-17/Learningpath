import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
   const { userId } = useParams();
  const students=useState([]);
   const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/students/${userId}`)
      .then(res => {
        setStudent(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [userId]);
  
  return (
    <div>
    <div className="bio-container">
      <h1>BIO DATA</h1><br /><br />
      {students.map(student => (
        <div key={student.id} className="profile">
          <label>Name: {student.name}</label><br></br><br></br>
          <label>Roll No: {student.rollno}</label><br></br><br></br>
          <label>Date of Birth: {student.dob}</label><br></br><br></br>
          <label>Department: {student.dept}</label><br></br><br></br>
          <label>Current Semester: {student.cursem}</label><br></br><br></br>
          <label>Current Year: {student.curyr}</label><br></br><br></br>
          <label>Phone Number: {student.phno}</label><br></br><br></br>
          <label>Email-Id: {student.email}</label><br></br><br></br>
          <label>Address: {student.addr}</label><br></br><br></br>
          <label>Blood Group: {student.bloodgrp}</label><br></br><br></br>
          
        </div>
      ))}
    </div>
  </div>
);
}

export default Profile;

