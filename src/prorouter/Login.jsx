import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const loginButton=()=>{
        localStorage.setItem('login',true);
        navigate("/")
      
    }
        const navigate=useNavigate();  
useEffect(()=>{
   
    let login=localStorage.getItem('login');
    if(login){
        navigate("/")
    }


  
})
    
  return (
    <div>
        <input type="text" />
        <input type="text" />
        <button onClick={loginButton}>Login</button>
    </div>
  )
}

export default Login