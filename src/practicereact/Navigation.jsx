import React from 'react'
import { NavLink } from 'react-router-dom'


const Navigation = () => {
  return (
    <div>
        
        <NavLink to={"/"}><li>Home</li></NavLink>
        <NavLink to={"/about"}><li>About</li></NavLink>
        <NavLink to={"/contact"}><li>Contact</li></NavLink>
        <NavLink to={"/login"}><li>login</li></NavLink>

       
    </div>
  )
}

export default Navigation
