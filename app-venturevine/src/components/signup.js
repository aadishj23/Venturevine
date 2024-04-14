import React from 'react'
import './signup.css'
function Signup() {
  return (
    <div className='signup'>
        <input type='text' placeholder='Enter your Name' />
        <input type="text" placeholder='Enter Email' />
        <input type="password" placeholder='Enter your password'/>
        <input type="password" placeholder='Confirm password'/>
    </div>
  )
}

export default Signup