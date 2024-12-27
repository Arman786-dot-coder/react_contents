import React, { useState } from 'react'
import Register from './Register';
import Greet from './Greet';

const App11 = () => {
    const [data,setData]=useState({
        isRegister:false,
        name:null,
        email:null,
        password:null,
    })

   const submitHandler=(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password=event.target.password.value;

    setData({name,email,password,isRegister:true
    },()=>{console.log(data)})
    
   }


  return (
    <div>
     {data.isRegister===true?<Greet name={data.name} email={data.email} />:<Register submit={submitHandler}/>}   
    </div>
  )
}

export default App11;

