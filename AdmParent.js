import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdmParent = () => {
  const navigate=useNavigate()
  const [post,setPost]=useState([])
  const [parid, setparId] = useState(0);
  const [parentName, setParentname] = useState("");
  const [studentName, setStudentName] = useState('');
  const [rollno,setRollno]=useState(0)
  const [studEmail,setStudEmail]=useState('')

  useEffect(() => {    
    axios.get(`http://localhost:3001/parents`)
    .then(res=>{setPost(res.data)})
    .catch(err=>{console.log(err)})
  }, [])

  const handleSubmit = () => {
    axios.post(`http://localhost:3001/parents`, {
      "parid": parid,
      "parentName": parentName,
      "studentName": studentName,
      "rollno": rollno,
      "studEmail": studEmail
    })
    .then((res) => {
      console.log(res);
      setPost([...post, res.data]);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const handleDelete = (parentId) => {
    axios.delete(`http://localhost:3001/parents/${parentId}`)
      .then((res) => {
        console.log(res);
        setPost(post.filter(item => item.id !== parentId));
      })
      .catch((err) => { console.log(err); });
  };

  const [popup, setpopup] = useState(false);
  const [parid1, setparId1] = useState(0);
  const [parentName1, setParentname1] = useState("");
  const [studentName1, setStudentName1] = useState('');
  const [rollno1,setRollno1]=useState(0)
  const [studEmail1,setStudEmail1]=useState('')
 
  const openPopup = (datas) => {
    setpopup(true);
    setparId1(datas.parid);
    setParentname1(datas.parentName);
    setStudentName1(datas.studentName);
    setRollno1(datas.rollno);
    setStudEmail1(datas.studEmail);
  }

  const handleView=()=>{
    navigate('/parentprofile');
}
 
  const handleUpdate = () => {
    axios.put(`http://localhost:3001/parents/${parid1}`, {
      "parid": parid1,"parentName": parentName1 ,"studentName":studentName1,"rollno":rollno1,"studEmail":studEmail1})
    .then((res) => { console.log(res) })
    .catch((err) => { console.log(err) });
  }

  return (
    <div>
    <div class="container">
    <div className="parent"><br></br>
      <div className="parenttable">
      <form onSubmit={handleSubmit}>
      <h1>Add New Parent</h1>   
      <br></br><br></br>
              <label>Parent Name: </label><br></br>
              <input type="text" value={parentName} onChange={(e) => {
                  setParentname(e.target.value);
                }} />
              <br></br>
              <label>Student Name: </label><br></br>
              <input type="text" value={studentName} onChange={(e) => {
                  setStudentName(e.target.value);
                }} />           
                 <br></br>
              <label>Student Rollno: </label><br></br>
              <input type="text" value={rollno} onChange={(e) => {
                  setRollno(e.target.value);
                }} />              
                <br></br>
              <label>Student Email: </label><br></br>
              <input type="email" value={studEmail} onChange={(e) => {
                  setStudEmail(e.target.value);
                }} />              
                <br></br>
          
              <button type='submit'>Add Parent</button>
              <br></br>
            <button onClick={() => handleView()}>View</button>      

          </form>
          <table>
  <thead>
    <tr>
      <th>ParentName</th>
      <th>StudentName</th>
      <th>StudentRollno</th>
      <th>Email</th>
      <th>Action</th> 
    </tr>
  </thead>
  <tbody>
  {post.map((x) => (
  <tr key={x.parid}> 
    <td>{x.parentName}</td>
    <td>{x.studentName}</td>
    <td>{x.rollno}</td>
    <td>{x.studEmail}</td> 
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
  <button onClick={() => {setpopup(false)}}> X </button>
  <label>Parent Name: </label><br></br>
  <input type="text" value={parentName1} onChange={(e) => setParentname1(e.target.value)} />
  <br></br>
  <label>Student Name: </label><br></br>
  <input type="text" value={studentName1} onChange={(e) => setStudentName1(e.target.value)} />
  <br></br>
  <label>Student Rollno: </label><br></br>
  <input type="text" value={rollno1} onChange={(e) => setRollno1(e.target.value)} />
  <br></br>
  <label>Student Email: </label><br></br>
  <input type="email" value={studEmail1} onChange={(e) => setStudEmail1(e.target.value)} />
  <br></br>
  <button type='submit'>Save</button>
</form>
              </div>
            )}
            <br></br>
          </div>
        </div>
      </div>
      </div>
  );
}

export default AdmParent
