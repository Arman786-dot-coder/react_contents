import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth0, } from "@auth0/auth0-react";






const Protected = () => {
  // const isAuth=false;
  const { loginWithRedirect,isAuthenticated,user,logout,isLoading} = useAuth0();
  
    
//     if(!isAuthenticated){
//       <button onClick={()=>loginWithRedirect()}>Log In</button>
    
//     }
// else if(isAuthenticated){
       
//       return <Outlet/>
//     }

return(
  <div>
    {isAuthenticated ? <><div><h1>Welcome User {user?.name}</h1><Outlet/></div><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button> </>: <button onClick={()=>loginWithRedirect()}>Log In</button>}
  </div>
)
 ;
}

export default Protected;