import React from 'react'
import './signin.css'
function Signin() {
  return (
    <div className='signin'>
        <input type="text" placeholder='Enter Email/Phone' />
        <input type="password" placeholder='Enter Password' />
        <button>SignIn</button>
    </div>
  )
}

export default Signin