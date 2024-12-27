import React, { useEffect } from 'react'
import {  Navigate, useNavigate } from 'react-router-dom';
import Useeffect from './Useeffect';

const Login = () => {
    // const login=()=>{
    //     localStorage.setItem('login',true);
    //     Navigate('/')
    // }
    // const navigate=useNavigate();
    // useEffect(()=>{
    //     let login=localStorage.getItem('login');
    //     if(login){
    //         navigate('/')
    //     }
    // })
  return (
    <div>
        <input type="text" />
        <input type="text" />
        <button >Login</button>
    </div>
  )
}

export default Login