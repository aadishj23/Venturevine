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
      <label htmlFor="name"> NAME </label>
        <input 
          type='text' 
          id='name'
          placeholder='Enter your Name' 
          name="Name" 
          value={signUpData.Name} 
          onChange={handleChange}
        />
        <label htmlFor="email"> EMAIL </label>
        <input 
          type="text" 
          id="email"
          placeholder='Enter Email' 
          name="Email" 
          value={signUpData.Email} 
          onChange={handleChange}
        />
        <label htmlFor="password"> PASSWORD </label>
        <input 
          type="password" 
          id="password"
          placeholder='Enter your password'
          name="Password" 
          value={signUpData.Password} 
          onChange={handleChange}
        />
        <label htmlFor="cnfpswd" > CONFIRM PASSWORD </label>
        <input 
          type="password" 
          id="cnfpswd"
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