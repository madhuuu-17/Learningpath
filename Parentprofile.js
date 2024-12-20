

import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Parentprofile = () => {
  const navigate=useNavigate('')

  const[post,setPost]=useState([])
  const[name,setName]=useState('')
  const[phno,setphno]=useState('')
  const[addr,setaddr]=useState('')
  const[bloodgrp,setbloodgrp]=useState('')

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/parent`, {
      "name":name,"phno":phno,"addr":addr,"bloodgrp":bloodgrp})
      .then((res) => {console.log(res) })
      .catch((err) => {console.log(err) })
  }

  const handleView=()=>{
    navigate('/parent-Displayprofile');
}

  return (
    <div>
      <div className="admin-cont">
        <div className="profilecontainer">
            <center><h1>Parent Profile</h1></center>
            <br></br>
            <form onSubmit={handleSubmit}>
            <label>Name: </label>
              <input type="text" value={name} onChange={(e) => {setName(e.target.value); }} />
              <br></br><br></br>
              
              <label>Phone number: </label>
              <input type="number" value={phno} onChange={(e) => {setphno(e.target.value);}} />
              <br></br><br></br>

              <label>Address: </label>
              <input type="text" value={addr} onChange={(e) => {setaddr(e.target.value); }} />
              <br></br><br></br>
              <label>Blood Group: </label>
              <input type="text" value={bloodgrp} onChange={(e) => {setbloodgrp(e.target.value);
                }} />
              <br></br><br></br>
        <button type='submit'>Save</button>


        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </form>
            </div>
            </div>
            <Outlet/>
        </div>      
  )
}


export default Parentprofile

