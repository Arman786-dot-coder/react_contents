import React from 'react'

const Rander = (props) => {
  return (
    <div >
    <div onClick={props.remove}>
       <h1 >Name: {props.name}</h1>
       <h1>gender: {props.gender}</h1>
       <h1>Education: {props.Education}</h1>
       <h1>age: {props.age}</h1>
       </div>
        </div>
  )
}

export default Rander;