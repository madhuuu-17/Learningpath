import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function AdmFac() {
  const [post, setPost] = useState([]);
  const [facid, setfacId] = useState(0);
  const [facName, setFacname] = useState("");
  const [facDept, setFacdept] = useState("");
  const [facSubject, setFacsubject] = useState("");
  const [facMajor, setFacMajor] = useState("");
  const navigate = useNavigate(); 

  useEffect(() => {    
    axios.get(`http://localhost:3001/faculty`)
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  }, [])

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/faculty`, {
        "facid": facid,"facName": facName,"facDept": facDept,"facSubject": facSubject,"facMajor": facMajor })
      .then((res) => {console.log(res) })
      .catch((err) => {console.log(err) })
  }

  const handleDelete = (facultyId) => {
    axios.delete(`http://localhost:3001/faculty/${facultyId}`)
      .then((res) => {
        console.log(res);
        setPost(post.filter(item => item.id !== facultyId));
      })
      .catch((err) => { console.log(err); });
  };

  const [popup, setpopup] = useState(false);
  const [facid1, setfacId1] = useState(0);
  const [facName1, setFacname1] = useState("");
  const [facDept1, setFacdept1] = useState("");
  const [facSubject1, setFacsubject1] = useState("");
  const [facMajor1, setFacMajor1] = useState("");

  const openPopup = (datas) => {
    setpopup(true);
    setfacId1(datas.id);
    setFacname1(datas.facName);
    setFacdept1(datas.facDept);
    setFacsubject1(datas.facSubject);
    setFacMajor1(datas.facMajor);
  }
  const handleUpdate = () => {
    axios.put(`http://localhost:3001/faculty/${facid1}`, {
      "facid": facid1,
      "facName": facName1,
      "facDept": facDept1,
      "facSubject": facSubject1,
      "facMajor": facMajor1,
    })
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) });
  }
  const handleView=()=>{
    navigate('/faculty-profile');
}
 
  return (
      <div>
    <div class="container">
    <div>
        <div className="container">
          <div className="faculty">
            <div class="facultytable">
              <form onSubmit={handleSubmit}>
              <h1>Add New Faculty</h1><br></br>
              <br></br>
                <label>Faculty Name: </label><br></br>
                <input type="text" value={facName} onChange={(e) => {
                    setFacname(e.target.value);
                  }} />
                <br></br><br></br>
                <label>Faculty Department: </label><br></br>
                <input  type="text" value={facDept} onChange={(e) => {
                    setFacdept(e.target.value);
                  }} />
                <br></br><br></br>
                <label>Faculty Subject: </label><br></br>
                <input  type="text" value={facSubject} onChange={(e) => {
                    setFacsubject(e.target.value);
                  }} />
                <br></br><br></br>
                <label>Faculty Major: </label><br></br>
                <input type="text"  value={facMajor}  onChange={(e) => {
                    setFacMajor(e.target.value);
                  }}  />
                <br></br><br></br>
                <button type="submit">Add Faculty</button>
                <br></br>
            <button onClick={() => handleView()}>View</button>

              </form>
  
              <table>
                <thead>
                  <tr>
                    <th>FacultyName</th>
                    <th>Department</th>
                    <th>Subject</th>
                    <th>Major</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {post.map((x) => (
                    <tr key={x.facid}>
                      <td>{x.facName}</td>
                      <td>{x.facDept}</td>
                      <td>{x.facSubject}</td>
                      <td>{x.facMajor}</td>
                      <td>
                      <button onClick={() => openPopup(x)}>Update</button>
                        <button onClick={() => handleDelete(x.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
  
              {popup && (
                <div className="popup">
                  <form onSubmit={handleUpdate}>
                    <button onClick={() => {setpopup(false)}}>  X </button>

                    <label>Faculty Name: </label><br></br>
                    <input type="text" value={facName1} onChange={(e) => {
                        setFacname1(e.target.value);
                      }}  />
                    <br></br><br></br>
                    <label>Faculty Department: </label><br></br>
                    <input type="text"  value={facDept1} onChange={(e) => {
                        setFacdept1(e.target.value);
                      }}  />
                    <br></br><br></br>
                    <label>Faculty Subject: </label><br></br>
                    <input type="text" value={facSubject1} onChange={(e) => {
                        setFacsubject1(e.target.value);
                      }} />
                    <br></br><br></br>
                    <label>Faculty Major: </label><br></br>
                    <input type="text" value={facMajor1} onChange={(e) => {
                        setFacMajor1(e.target.value);
                      }}  />
                    <br></br><br></br>
                    <button type="submit">Save</button>
                  </form>
                </div>
              )}
              <br></br>
            </div>
          </div>
        </div>
        </div>
      </div>
      </div>      
  );
}
