import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigat = () => {
  return (
    <div>
        <nav>
           <NavLink to={"/"}><li>Home</li></NavLink> 
           <NavLink to={"/about"}><li>About</li></NavLink> 
           <NavLink to={"/services"}><li>Services</li></NavLink> 
           <NavLink to={"/login"}><li>Login</li></NavLink> 
           
        </nav>
    </div>
  )
}

export default Navigat