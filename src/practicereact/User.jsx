import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const params=useParams();
  return (
    <div> <h1>hi my name is {params.username}</h1></div>
  )
}

export default User;