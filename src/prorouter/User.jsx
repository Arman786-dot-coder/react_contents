import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const params =useParams();

  return (
    <div><h1>Hello My name is {params.firstname}</h1></div>
  )
}

export default User