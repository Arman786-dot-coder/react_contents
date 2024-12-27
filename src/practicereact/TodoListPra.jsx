import React, { useState } from 'react'

const TodoListPra = () => {
 const [inputVal,setInputVal]=useState("");
 const [inputList,setInputList]=useState([]);
 const [toggleSubmit,setToggleSubmit]=useState(true);
 const [isEditItem,setIsEditItem]=useState(null)

 const addTask =()=>{
    if(!inputVal){
        alert("please enter todo task")
    }
    else if(inputVal && !toggleSubmit){
        setInputList(
            inputList.map((val)=>{
                if(val.id===isEditItem){
                    return {...val,name:inputVal}
                }
                return val;
            })
        )
        setToggleSubmit(true);
        setInputVal('');
    }
    else{
        const allInputData={id: new Date().getTime().toString(), name: inputVal}
        setInputList([...inputList, allInputData])
        setInputVal('')
    }
    
 }
 const removeTask=(index)=>{
    const updateListData=inputList.filter((val)=>{
        return val.id!==index
    })
    setInputList(updateListData)
 }

 const editTask=(id)=>{
const findData=inputList.find((val)=>{
    return val.id===id
})
setInputVal(findData.name)
setIsEditItem(id)
setToggleSubmit(false)

 }

  return (
    <div>
      <input type="text"  placeholder='enter todo task' value={inputVal} onChange={(e)=>setInputVal(e.target.value)}/> 


      {
        toggleSubmit? <button onClick={addTask}>Add Task</button>: <button onClick={addTask}>Edit Task</button>
      }


   
      {
inputList.map((val)=>{
    return(
        <>
        <div key={val.id}>
            <li>
                {val.name}
                <button onClick={()=>removeTask(val.id)}>remove(x)</button>
                <button onClick={()=>editTask(val.id)}>Edit(//)</button>


            </li>
        </div>
        </>
    )
})
      }
    </div>
  )
}

export default TodoListPra;