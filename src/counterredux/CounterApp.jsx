import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,decrementByAmount,clearAll } from './counterSlice';

const CounterApp = () => {
    const count=useSelector((state)=>state.counter.value);
    const dispatch=useDispatch();

  return (
    <div>
        <h1 >Count: {count}</h1>
<button onClick={()=>dispatch(increment())}>increment</button>
<button onClick={()=>dispatch(decrement())}>decrement</button>
<button onClick={()=>dispatch(incrementByAmount(10))}>incrementBy 10</button>
<button onClick={()=>dispatch(decrementByAmount(10))}>decrementBy 10</button>
<button onClick={()=>dispatch(clearAll())}>clearAll</button>
    </div>
  )
}

export default CounterApp;