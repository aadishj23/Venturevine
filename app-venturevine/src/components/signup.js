import React from 'react'
import './signup.css'
function Signup() {
  const [signUpData,setSignUpData]=React.useState({Name: "" ,Email: "" , Password: "",ConfirmPassword: ""  })
  function handleChange(event){
  const {name,value}=event.target
    setSignUpData(prevSignUpData => {
      return {
        ...prevSignUpData,
        [name]:value
      }
    })
  }
  // console.log(signUpData)
  function handleSubmit(event){
    event.preventDefault()
    // Database request
  }
  return (
    <div className='signup'>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='Enter your Name' 
          name="Name" 
          value={signUpData.Name} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          placeholder='Enter Email' 
          name="Email" 
          value={signUpData.Email} 
          onChange={handleChange}
        />
        <input 
          type="password" 
          placeholder='Enter your password'
          name="Password" 
          value={signUpData.Password} 
          onChange={handleChange}
        />
        <input 
          type="password" 
          placeholder='Confirm password'
          name="ConfirmPassword" 
          value={signUpData.ConfirmPassword} 
          onChange={handleChange}
        />
        <button type='submit'>SignUp</button>
      </form>
    </div>
  )
}

export default Signup