import React, { useState,useEffect } from 'react'
import { NavLink, useActionData, useNavigate} from 'react-router-dom'
import logo from './logo.webp'
import projpic from './corresponent.jpg'
import axios from 'axios'


export default function Facprofile() {
const navigate=useNavigate('')

  const [post,setPost]=useState([])
  const [facid, setFacId] = useState(0);
  const [facName, setFacname] = useState("");
  const [facDes,setFacdes]=useState(' ');
  const [facDept, setFacdept] = useState("");
  const [facGender,setFacgender]=useState('');
  const [facbloodgrp,setFacbloodgrp]=useState('');
  const[facAddr,setFacaddr]=useState('');
  const [facPhno,setFacphno]=useState('');

  useEffect(() => {    
    axios.get(`http://localhost:3001/faculty`)
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  }, [])

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/faculty`, {
        "facid": facid,"facName": facName,"facDept": facDept,"FacDes":facDes,
    "facGender":facGender,"facbloodgrp":facbloodgrp,"facAddr":facAddr,"facPhno":facPhno})
      .then((res) => {console.log(res) })
      .catch((err) => {console.log(err) })
  }

  const handleView=()=>{
    navigate('/fac-displayprofile');
}

  return (
    <div>
  <div className="container">
    
    <div className="profilecontainer">
        <center><h1>Faculty Profile</h1></center>
        <form onSubmit={handleSubmit}>
              <label>Id</label>
              <input type="number" value={facid} onChange={(e) => {
                  setFacId(e.target.value);
                }}/>
              <br></br><br></br>
              <label>Faculty Name: </label>
              <input type="text" value={facName} onChange={(e) => {
                  setFacname(e.target.value);
                }} />
              <br></br><br></br>
              <label>Faculty Department: </label>
              <input  type="text" value={facDept} onChange={(e) => {
                  setFacdept(e.target.value);
                }} /><br></br><br></br>
                <label>Faculty Designation</label>
              <input type="text" value={facDes} onChange={(e) => {
                  setFacdes(e.target.value);
                }}/>
              <br></br><br></br>
              <label>Gender: </label>
              <input type="text" value={facGender} onChange={(e) => {
                  setFacgender(e.target.value);
                }} />
              <br></br><br></br>
              <label>Blood Group: </label>
              <input  type="text" value={facbloodgrp} onChange={(e) => {
                  setFacbloodgrp(e.target.value);
                }} /><br></br><br></br>
              <label>Address: </label>
              <input type="text" value={facAddr} onChange={(e) => {
                  setFacaddr(e.target.value);
                }} />
              <br></br><br></br>
              <label>Contact No.: </label>
              <input type="text" value={facPhno} onChange={(e) => {
                  setFacphno(e.target.value);
                }} />
              <br></br><br></br>
              <button type="submit">Save </button><br></br>
              <br></br><br></br><br></br><br></br><br></br>
              <br></br><br></br><br></br><br></br>
        </form>
        
    </div>
    </div>
    </div>
  )
}
