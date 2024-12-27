import React, { useState } from 'react'

const Form = (props) => {
    const [User,setUser]=useState({name:null,
            country:null})
    
const submitHandler=(event)=>{
    event.preventDefault();

    const name=event.target.name.value;
    const country=event.target.country.value;
    setUser({name,country});

    console.log(User); 
    
}


  return (
    <div>
        <form action="" onSubmit={submitHandler} >
            <div>
                <label htmlFor="" >Name</label>
                <input type="text" name='name'  />
            </div>
            <div>
                <label htmlFor="">country</label>
                <select name="country" id="" >
                    <option value="delhi">delhi</option>
                    <option value="haryana">haryana</option>
                    <option value="punjab">punjab</option>
                </select>
            </div>
            <button type='submit'>submit</button>
           
        </form>

        <h1>Name: {User.name}</h1>
        <h1>Country: {User.country}</h1>
    </div>
  )




}

export default Form;