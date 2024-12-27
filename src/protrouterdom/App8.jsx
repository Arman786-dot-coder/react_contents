import React from 'react'
import { BrowserRouter, createBrowserRouter, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import User from './User'
import Login from './Login'
import Protected from './Protected'

const App8 = () => {
  
    
    
  return (
    <div>
        <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route  element={<Protected />}>
          <Route element={<Home/>} path='/'/>
          <Route element={<About/>} path='/about'/>
          
       </Route>
       
        <Route path='/user/:username' element={<User/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/protected' element={<Protected/>}/>
        

    
       </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App8