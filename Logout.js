import React from 'react'
import { useAuth } from './Auth'
import { Link, useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()
  const auth = useAuth()

  const handleLogout = () => {
    auth.logout()
    navigate('/login')
  }

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
      <Link to='/login'>Go to Login</Link>
    </div>
  )
}

export default Logout
