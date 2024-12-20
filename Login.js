
import React, { useEffect, useState } from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Logout from './Logout'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [userlist, setUserlist] = useState([])
  const [adminlist, setAdminlist] = useState([])
  const [facultylist, setFacultylist] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/users`)
      .then(res => setUserlist(res.data))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get(`http://localhost:3001/admin`)
      .then(res => setAdminlist(res.data))
      .catch(err => console.log(err))
  }, [])
  useEffect(() => {
    axios.get(`http://localhost:3001/facultys`)
      .then(res => setFacultylist(res.data))
      .catch(err => console.log(err))
  }, [])

  const auth = useAuth()

  const handleLogin = () => {
    const userExist = userlist.some(u => u.username === username && u.password === password)
    const adminExist = adminlist.some(a => a.username === username && a.password === password)
    const facultyExist = facultylist.some(f => f.username === username && f.password === password)

    if (adminExist) {
      auth.login(username);
      navigate('/admin');
    } else if (facultyExist) {
      auth.login(username);
      navigate('/faculty-home');
    } else if (userExist) {
      auth.login(username);
      navigate('/profile');
    } else {
      alert('Invalid Username or Password');
    }
  }

  return (
    <div className='container'>
      <div className='Login'>
        <form onSubmit={handleLogin}>
          <br></br><br></br><br></br>
          <br></br><br></br><br></br>
          <h1>Login</h1><br></br><br></br><br></br>
          <label>Username:</label>
          &emsp; &emsp;<input type='text' value={username} onChange={(e) => { setUsername(e.target.value) }} /><br></br><br></br><br></br>
          <label>Password:</label>
          &emsp; &emsp;<input type='password' value={password} onChange={(e) => { setPassword(e.target.value) }} /><br></br><br></br>
          <button type='submit'>Login</button><br></br>
          <br></br>
        </form>
        {auth.user && <Logout />} 
      </div>
    </div>
  )
}

export default Login
