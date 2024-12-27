import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [count,setCount]=useState(0);
    const [counts,setCounts]=useState(0);
    useEffect(()=>{
        alert('increment')
    },[count])

const addVal=()=>{
    setCount(count+1)
}
const dedVal=()=>{
    setCounts(counts-1)
}

  return (
    <div>
       <h1>{count}</h1> 
       <h1>{counts}</h1> 
       <button onClick={addVal}>Add</button>
       <button onClick={dedVal}>Ded</button>
    </div>
  )
}

export default Useeffect;