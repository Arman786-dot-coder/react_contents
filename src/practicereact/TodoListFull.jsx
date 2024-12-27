import React, { useState } from 'react'

const TodoListFull = () => {
    const [inputVal,setInputVal]=useState("");
    const [inputList,setInputList]=useState([]);
    const [toggleSubmit,setToggleSubmit]=useState(true);
    const [isEditItem,setIsEditItem]=useState(null)
   

    const addTask=()=>{
        if(!inputVal){
            alert("!please Enter Todo Task");


        
        }else if(inputVal && !toggleSubmit){
            setInputList(
                inputList.map((elem)=>{
                    if(elem.id===isEditItem){
                        return {...elem, name: inputVal}
                    }
                    return elem;
                })
            )
            setInputVal('');
            setToggleSubmit(true)

        }

        else{
            const allInputData={id : new Date().getTime().toString(), name:inputVal}
            setInputList([...inputList,allInputData]);
            setInputVal('');

        }
        
}


const removeTask=(index)=>{
    const updateListData=inputList.filter((elem)=>{
        return index!=elem.id;
    })
    setInputList(updateListData);
}
const removeAll=()=>{
    setInputList([])

}
const editTask=(id)=>{
   let newEditItem=inputList.find((elem)=>{
    return elem.id===id
   })
   console.log(newEditItem)
   setToggleSubmit(false);
   setInputVal(newEditItem.name)
   setIsEditItem(id)


    }

  return (
    <div>
        <input type="text"  value={inputVal} placeholder='Enter Todo Task' onChange={(e)=>{setInputVal(e.target.value)}}/>

        {
            toggleSubmit?<button onClick={addTask}>Add Task</button>:<button onClick={addTask}>Edit Task</button>
 
        }
           
        

       
        <button onClick={removeAll}>remove All(x)</button>
        {
         inputList.map((val)=>{
                return(
                    <>
                    <div key={val.id}>
                        <li>
                            {val.name}
                            <button onClick={()=>removeTask(val.id)}> removeTask</button>
                            <button onClick={()=>editTask(val.id)}>edit Task</button>
                        </li>
                    </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default TodoListFull;