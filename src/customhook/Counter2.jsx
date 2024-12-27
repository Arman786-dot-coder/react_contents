import React from 'react'
import useCounter from './useCounter'

const Counter2 = () => {
let [count,inc,dec,reset]=useCounter(10,1);
console.log({count,inc,dec,reset});
       
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>increment</button>
      <button onClick={dec}>decrement</button>
      <button onClick={reset}>reset</button>



    </div>
  
  )
}

export default Counter2;