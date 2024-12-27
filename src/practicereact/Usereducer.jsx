import React, { useReducer } from 'react'

const initialstate={
    name:"arman",
    age:10,
}
const Usereducer = () => {
const reducer=(state,action)=>{
    if(action.type==="increment"){
        return {...initialstate,age:state.age+1}
    }

    if(action.type==="decrement"){
        return {...initialstate, age:state.age-1}
    }
}

const [state,dispatch]=useReducer(reducer,initialstate);
  return (
    <div>
        <h1>name:{state.name}</h1>
        <h1>age:{state.age}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>increment</button>
        <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
    </div>
  )
}

export default Usereducer;