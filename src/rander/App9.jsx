import React, { useState } from 'react'
import Rander from './Rander'


function App9(){
    const personDetails={
       persons: [
            {
                name:"arman malik",
                gender:"male",
                Education: "12th passed",
                age:20
            },
            {
                name:"aman kumar",
                gender:"male",
                Education: "graduated",
                age:25
            },
            {
                name:"sushant kumar",
                gender:"male",
                Education: "graduated",
                age:22
            },
            {
                name:"anuj kumar",
                gender:"male",
                Education: "graduated",
                age:21
            },
        ]
    }
let [isToggle,setIsToggle]=useState(true);
// let [isRemove,setIsRemove]=useState(true);

    const Toggle=()=>{
setIsToggle(isToggle=!isToggle)
    }

    const RemoveData=(personIndex)=>{
        const personCopy=personDetails.persons;
        personCopy.splice(personIndex,1)
        console.log(personIndex)
    }

    let persons=personDetails.persons.map((p,index)=>{
        
        return <Rander name={p.name} gender={p.gender} Education={p.Education} age={p.age} remove={()=>RemoveData(index)}/>
        
       
    
    })

  

    return (
        <div>
       <button onClick={Toggle}>Toggle Data</button> 
     
       {isToggle?persons:<><h1>Please Click On Button</h1></>}





        </div>
      )
    
}




    







export default App9