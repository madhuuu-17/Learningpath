import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

const Navbar = () => {
  const auth=useAuth()
  return (
    <div>
      <nav className='navbar'>
      <div className="abs">

        <h2>{auth.user==='admin' && <NavLink to='/admin'>Home</NavLink>}</h2>
        <h2>{auth.user==='admin' && <NavLink to='/admin-student'>Add Student</NavLink>}</h2>
        <h2>{auth.user==='admin' && <NavLink to='/admin-faculty'>Add Faculty</NavLink>}</h2>
        <h2>{auth.user==='admin' && <NavLink to='/admin-parent'>Add Parent</NavLink>}</h2>

        <h2>{auth.user==='admin' || auth.user==='facultys' && <NavLink to='/fac-profile'>Add Faculty Details</NavLink>}</h2>
        <h2>{auth.user==='admin' || auth.user==='facultys' && <NavLink to='/stud-profile'>Add Student Details</NavLink>}</h2>
        <h2>{auth.user==='admin' || auth.user==='facultys' || <NavLink to='/par-profile'>Add Parent Details</NavLink>}</h2>
       
        <h2>{auth.user==='facultys' || <NavLink to='/faculty-home'>Faculty Home</NavLink>}</h2>      
        <h2>{auth.user==='admin' || auth.user==='facultys' || <NavLink to='/faculty-profile'>Faculty Profile</NavLink>}</h2>
        <h2>{auth.user==='admin' || auth.user==='facultys' || <NavLink to='/parent-profile'>Parent Profile</NavLink>}</h2>

        <h2>{auth.user==='admin' || auth.user==='facultys' || auth.user==='users' || <NavLink to='/profile'>Student Profile</NavLink>}</h2>
        <h2>{auth.user==='admin' || auth.user==='facultys' || auth.user==='users' || <NavLink to='/timetable'>Timetable</NavLink>}</h2>
        <h2>{auth.user==='admin' || auth.user==='users' || <NavLink to='/result'>Result</NavLink>}</h2>
        <h2>{auth.user==='admin' || auth.user==='facultys' || auth.user==='users' || <NavLink to='/markdetails'>Markdetails</NavLink>}</h2>
    
    </div>
      </nav>
    </div>
  )
}
export default Navbar