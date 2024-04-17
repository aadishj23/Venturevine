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
        <input 
            type="text" 
            placeholder='Enter Email/Phone' 
            name="Name" 
            value={signInData.Name} 
            onChange={handleChangeSignIn}
        />
        <input 
          type="password" 
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