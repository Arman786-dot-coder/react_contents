import React, { useReducer } from 'react'



const initialState={
    count:0
}

const Reducer = () => {
    const reducer=(state,action)=>{
        if(action.type==="increment"){
            return {count:state.count+1};
        }
       
        if(action.type==="decrement"){
            return {count:state.count-1};
        }
       

    }

const [state,dispatch]=useReducer(reducer,initialState);



  return (
   
    <div>
        <h1>Counter: {state.count}</h1>
  <button onClick={()=>dispatch({type:"increment"})}>increment</button>     
  <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>     

    </div>  
  )
}


export default Reducer;