import React from 'react'

const Register = (props) => {
  return (
    <div>
        <h1>Register Form</h1>
        <form action="" onSubmit={props.submit} >
            <div>
                <label htmlFor="name">name</label>
                <input type="text" name='name' />
            </div>
            <div>
                <label htmlFor="email">email</label>
                <input type="email" name='email' />
            </div>
            <div>
                <label htmlFor="password">password</label>
                <input type="password" name='password' />
            </div>
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default Register;