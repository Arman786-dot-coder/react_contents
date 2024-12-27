import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [appData,setAppData]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>res.json()).then((data)=>{
            setAppData(data)
        })
        .catch((error)=>console.log(error))
    },[]);
  return (
    <div>
        
    </div>
  )
}



export default FetchData;