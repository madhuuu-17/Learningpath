import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  useNavigate } from "react-router-dom";


const Studentmain = () => {
  const [post, setPost] = useState([]);
  const [rollno, setRollno] = useState(0);
  const [studentName, setStudentName] = useState('');
  const [department, setDepartment] = useState('');
  const [section, setSection] = useState(0);
  const [batch, setBatch] = useState(0);
  const navigate = useNavigate(); 

    useEffect(() => {    
    axios.get(`http://localhost:3001/students`)
      .then(res => {setPost(res.data) })
      .catch(err => { console.log(err) })
  }, []);

  const handleSubmit = () => {
    // e.preventDefault(); 
    axios.post(`http://localhost:3001/students`, {
      "rollno": rollno,"studentName": studentName, "department": department,  "section": section, "batch": batch
    })
    .then((res) => {console.log(res) })
    .catch((err) => {console.log(err) })
  }

    const handleDelete = (studentRollno) => {
      axios.delete(`http://localhost:3001/students/${studentRollno}`)
        .then(res => {
          console.log(res);
          setPost(post.filter(item => item.rollno !== studentRollno));
        })
        .catch(err => { console.log(err); });
    }

    const handleView=()=>{
      navigate('/student-profile');
  }
    

    const[popup,setPopup]=useState(false)
    const[rollno1,setRollno1]=useState(0)
    const[studentName1,setStudentName1]=useState('')
    const[department1,setDepartment1]=useState('')
    const[section1,setSection1]=useState(0)
    const[batch1,setBatch1]=useState(0)

    const openPopup=(datas)=>{
    setPopup(true)
    setRollno1(datas.rollno)
    setStudentName1(datas.studentName)
    setDepartment1(datas.department)
    setSection1(datas.section)
    setBatch1(datas.batch)
    }

    const handleUpdate = () => {
      axios.put(`http://localhost:3001/students/${rollno1}`, {
        "Rollno": rollno1,
        "StudentName": studentName1,
        "Department": department1,
        "Section": section1,
        "Batch": batch1,
      })
      .then(res => { console.log(res); })
      .catch(err => { console.log(err); });
    }


  return (
    <div>
     <div class="container">
    <div className="addstudent">
          <h1>Add New Student</h1>
          <form onSubmit={handleSubmit}>
            <label>Student Name:</label>
            <input type='text' value={studentName} onChange={(e) => {setStudentName(e.target.value);}}/><br></br>
            <label>Rollno:</label>
            <input type='number' value={rollno} onChange={(e) => {setRollno(e.target.value);}}/><br></br>
            <label>Department:</label>
            <input type='text' value={department} onChange={(e) => {setDepartment(e.target.value);}}/><br></br>
            <label>Section:</label>
            <input type='number' value={section} onChange={(e) => {setSection(e.target.value);}}/><br></br>
            <label>Batch:</label>
            <input type='number' value={batch} onChange={(e) => {setBatch(e.target.value);}}/><br></br>
            <button type='submit'>Add Student</button><br></br>
          </form>

    
      <table>
        <thead>
            <tr>
                <th>Rollno</th>
                <th>StudentName</th>
                <th>Department</th>
                <th>Section</th>
                <th>Batch</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
              {post.map((x) => (
                <tr key={x.rollno}>
                  <td>{x.rollno}</td>
                  <td>{x.studentName}</td>
                  <td>{x.department}</td>
                  <td>{x.section}</td>
                  <td>{x.batch}</td>
                  <td>
                    <button onClick={() => openPopup(x)}>Update</button>
                    <button onClick={() => handleDelete(x.rollno)}>Delete</button>
                    <button onClick={() => handleView(x)}>View</button>

                  </td>
                </tr>
              ))}    
            </tbody>
          </table>
      
          {popup && (
            <div className="popup">
              <form onSubmit={handleUpdate}>
                <button onClick={() => {setPopup(false);}}>X</button>
                <label>Rollno:</label>
                <input type='number' value={rollno1} onChange={(e) => {setRollno1(e.target.value);}}/><br></br>
                <label>Student Name:</label>
                <input type='text' value={studentName1} onChange={(e) => {setStudentName1(e.target.value);}}/><br></br>
                <label>Department:</label>
                <input type='text' value={department1} onChange={(e) => {setDepartment1(e.target.value);}}/><br></br>
                <label>Section:</label>
                <input type='number' value={section1} onChange={(e) => {setSection1(e.target.value);}}/><br></br>
                <label>Batch:</label>
                <input type='number' value={batch1} onChange={(e) => {setBatch1(e.target.value);}}/><br></br>
                <button type='submit'>Submit</button><br></br>
              </form>
            </div>
          )}

          <br></br>
        </div>
      </div>
    </div>
  );
}


export default Studentmain