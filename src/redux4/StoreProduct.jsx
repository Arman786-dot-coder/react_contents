// src/App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount,decrementByAmount } from './counterSlice';

function StoreProduct() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <button onClick={() => dispatch(decrementByAmount(5))}>Decrement by 5</button>
    </div>
  );
}

export default StoreProduct;
