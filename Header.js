import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth' 
import logo from './logo.webp'
const Header = () => {
  const auth = useAuth();

  return (
    <div>
      <header className="header-container">
        <div className="head-items logo">
          <img src={logo} width="120px" height="120px" alt="logo" />
        </div>
        <div className="head-items name">
          <div className="main-name">
            <h1>PSR ENGINEERING COLLEGE</h1>
          </div>
          <label>Approved by AICTE & Affiliated to Anna University Chennai</label>
        </div>
        <div className="head-items nav">
          <div className="nav-item item1"><NavLink to='/home'>Home</NavLink></div>
          <div className="nav-item item2"><NavLink to='/about'>AboutUs</NavLink></div>
          <div className="nav-item item3"><NavLink to='/contact'>ContactUs</NavLink></div>
          {auth.user ? 
          (<div className="nav-item item3"><NavLink to='/logout'>Logout</NavLink></div>) :
             (<div className="nav-item item3"><NavLink to='/'>Login</NavLink></div> )}
        </div>
      </header>
    </div>
  )
}

export default Header
