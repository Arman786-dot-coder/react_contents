import React from 'react'

const Greet = (props) => {
 
  return (
    <div>
        <h1>{props.name} thanks for joining us</h1>
        <h1>verification sent to {props.email}</h1>
        <button >go to back</button>
    </div>
  )
}

export default Greet;