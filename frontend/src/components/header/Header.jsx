import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="navbar bg-primary  text-primary-content rounded-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/upload">Upload</NavLink></li>
        <li><NavLink to="/view">View</NavLink></li>
      </ul>
    </div>
    <NavLink className="btn btn-ghost text-xl">daisyUI</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/upload">Upload</NavLink></li>
        <li><NavLink to="/view">View</NavLink></li>
    </ul>
  </div>
</div>
  )
}

export default Header