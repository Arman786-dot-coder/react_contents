import React, { useState } from 'react'
// import { Navigate, Outlet } from 'react-router-dom';
// import Protected from './Protected';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect} = useAuth0();
  return (

    <div>
     
    <button onClick={loginWithRedirect}>log in</button>

    </div>
  )
}

export default Login