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
    function handleSubmit(event){
      event.preventDefault()
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
        <input type="text" placeholder='Enter Email' />
        <input type="password" placeholder='Enter your password'/>
        <input type="password" placeholder='Confirm password'/>
        <button>SignUp</button>
      </form>
    </div>
  )
}

export default Signup