import React, { useState } from 'react'

const TodoList = () => {
   const [inputVal,setInputVal]=useState("");
   const [inputList,setInputList]=useState([]);
   const addAct=(event)=>{
    setInputList([...inputList,inputVal]);
    setInputVal('');
   }
   const removeAct=(i)=>{
    const updateListData=inputList.filter((elem,idx)=>{
        return idx!=i;
    })
setInputList(updateListData);
   }

   const removeAll=()=>{
    setInputList([

        
    ])
   }
  return (
    <div>
        <input type="text" value={inputVal} placeholder='Enter Todo Task' onChange={(e)=>{setInputVal(e.target.value)}}/>
        <button onClick={addAct}>Add Task</button>
        <button onClick={removeAll}>remove All(x)</button>
        {
            inputList!=[] && inputList.map((val,i)=>{
                return(
                    <>
                    <div>
                        <li>
                            {val}
                            <button onClick={()=>removeAct(i)}>remove(x)</button>
                        </li>
                    </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default TodoList