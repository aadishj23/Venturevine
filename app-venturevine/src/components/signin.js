import React from 'react'
import './signin.css'
function Signin() {
  const [signInData,setSignInData]=React.useState({Name: "", Password: "" })
  function handleChangeSignIn(event){
  const {name,value}=event.target
    setSignInData(prevSignInData => {
      return {
        ...prevSignInData,
        [name]:value
      }
    })
  }
  // console.log(signInData)
  function handleSubmitSignIn(event){
    event.preventDefault()
    // Database request
  }
  return (
    <div className='signin'>
      <form onSubmit={handleSubmitSignIn}>
        <label htmlFor="email-phone"> EMAIL/PHONE </label>
        <input 
            type="text" 
            id='email-phone'
            placeholder='Enter Email/Phone' 
            name="Name" 
            value={signInData.Name} 
            onChange={handleChangeSignIn}
        />
        <label htmlFor="pswd"> PASSWORD </label>
        <input 
          type="password" 
          id='pswd'
          placeholder='Enter Password' 
          name="Password" 
          value={signInData.Password} 
          onChange={handleChangeSignIn}
        />
        <button type='submit'>SignIn</button>
      </form>
    </div>
  )
}

export default Signin