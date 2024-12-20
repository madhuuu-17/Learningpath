
import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const StudentProfile = () => {
const navigate=useNavigate('')
  const[post,setPost]=useState([])
  const[name,setName]=useState('')
  const[rollno,setRollno]=useState(0)
  const[dob,setDob]=useState(0)
  const [dept,setDept]=useState('')
  const[cursem,setcursem]=useState('')
  const[curyr,setcuryr]=useState('')
  const[phno,setphno]=useState('')
  const[email,setEmail]=useState('')
  const[addr,setaddr]=useState('')
  const[bloodgrp,setbloodgrp]=useState('')

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/students`, {
      "name":name,"rollno":rollno,"dob":dob,"dept":dept,"cursem":cursem,
      "curyr":curyr,"phno":phno,"email":email,"addr":addr,"bloodgrp":bloodgrp})
      .then((res) => {console.log(res) })
      .catch((err) => {console.log(err) })
  }
  const handleView=()=>{
    navigate('/profile');
}
  return (
    <div>
      <div className="admin-cont">
        <div className="profilecontainer">
            <center><h1>Student Profile</h1></center>
            <br></br>
            <form onSubmit={handleSubmit}>
            <label>Name: </label>
              <input type="text" value={name} onChange={(e) => {setName(e.target.value); }} />
              <br></br><br></br>
              <label>Roll no: </label>
              <input type="text" value={rollno} onChange={(e) => {
                  setRollno(e.target.value);
                }} />
              <br></br><br></br>
              <label>Date of Birth: </label>
              <input type="date" value={dob} onChange={(e) => {
                  setDob(e.target.value);
                }} />
              <br></br><br></br>
              <label>Department: </label>
              <input type="text" value={dept} onChange={(e) => {
                  setDept(e.target.value);
                }} />
              <br></br><br></br>
              <label>Current Semester: </label>
              <input type="text" value={cursem} onChange={(e) => {
                  setcursem(e.target.value);
                }} />
              <br></br><br></br>
              <label>Current Year: </label>
              <input type="number" value={curyr} onChange={(e) => {setcuryr(e.target.value); }} />
              <br></br><br></br>
              <label>Phone number: </label>
              <input type="number" value={phno} onChange={(e) => {setphno(e.target.value);}} />
              <br></br><br></br>
              <label>Email ID: </label>
              <input type="email" value={email} onChange={(e) => {setEmail(e.target.value);}} />
              <br></br><br></br>
              <label>Address: </label>
              <input type="text" value={addr} onChange={(e) => {setaddr(e.target.value); }} />
              <br></br><br></br>
              <label>Blood Group: </label>
              <input type="text" value={bloodgrp} onChange={(e) => {setbloodgrp(e.target.value);
                }} />
              <br></br><br></br>
        <div className='buton'>
        <button type='submit'>Save</button>
        <button onClick={() => handleView()}>View</button>      
        </div>

        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </form>
            </div>
            </div>
            <Outlet/>
        </div>      
  )
}


export default StudentProfile

