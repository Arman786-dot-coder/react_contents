import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const login=()=>{
        localStorage.setItem('login',true);
        navigate('/')
    }
    const navigate=useNavigate();
    useEffect(()=>{
        let login =localStorage.getItem('login');
        if(login){
            navigate('/')
        }
    })
  return (
    <div>
       <label htmlFor="">Name </label> <input type="text" />
       <label htmlFor="">Email Id </label> <input type="text" />
       <label htmlFor="">Mobile No. </label> <input type="text" />
       <button onClick={login}>Login</button>
    </div>
  )
}

export default Login