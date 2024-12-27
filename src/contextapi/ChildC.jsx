import React, { useContext } from 'react'
import { data ,data1,data2 } from '../App';

const ChildC = () => {
    const name=useContext(data);
    const gender=useContext(data1);
    const age=useContext(data2);
  return (
    <div>
       <h1>Hi my name is {name} and my gender is {gender} and age {age}</h1>
    </div>

  )
}

export default ChildC;