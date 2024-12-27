import React from 'react'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'

const Navbar = () => {
  return (
    <div>

      <NavLink to={"/"}><li>home</li></NavLink>
      <NavLink to={"/about"}><li>about</li></NavLink>
      <NavLink to={"/contact"}><li>contact</li></NavLink>
      <NavLink to={"/login"}><li>login</li></NavLink>
      
    </div>
  )
}

export default Navbar