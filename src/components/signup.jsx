import React from 'react'
import { Link } from 'react-router-dom'

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
    // Database request
  }
  
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#023047] to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8'>
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <form 
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl shadow-black/20 p-6 sm:p-8 md:p-10 lg:p-12 space-y-5 sm:space-y-6 border border-white/30"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#023047] mb-2">
              Join VentureVine
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Create your account and start your entrepreneurial journey
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <div>
              <label 
                htmlFor="name" 
                className="block text-sm sm:text-base font-semibold text-[#023047] mb-2 uppercase tracking-wide"
              > 
                NAME 
              </label>
              <input 
                type='text' 
                id='name'
                placeholder='Enter your Name' 
                name="Name" 
                value={signUpData.Name} 
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-2 border-gray-200 focus:border-[#023047] focus:ring-4 focus:ring-[#023047]/20 focus:outline-none transition-all duration-300 shadow-md hover:shadow-lg bg-white/80"
                required
              />
            </div>

            <div>
              <label 
                htmlFor="email" 
                className="block text-sm sm:text-base font-semibold text-[#023047] mb-2 uppercase tracking-wide"
              > 
                EMAIL 
              </label>
              <input 
                type="email" 
                id="email"
                placeholder='Enter Email' 
                name="Email" 
                value={signUpData.Email} 
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-2 border-gray-200 focus:border-[#023047] focus:ring-4 focus:ring-[#023047]/20 focus:outline-none transition-all duration-300 shadow-md hover:shadow-lg bg-white/80"
                required
              />
            </div>

            <div>
              <label 
                htmlFor="password" 
                className="block text-sm sm:text-base font-semibold text-[#023047] mb-2 uppercase tracking-wide"
              > 
                PASSWORD 
              </label>
              <input 
                type="password" 
                id="password"
                placeholder='Enter your password'
                name="Password" 
                value={signUpData.Password} 
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-2 border-gray-200 focus:border-[#023047] focus:ring-4 focus:ring-[#023047]/20 focus:outline-none transition-all duration-300 shadow-md hover:shadow-lg bg-white/80"
                required
                minLength="6"
              />
            </div>

            <div>
              <label 
                htmlFor="cnfpswd" 
                className="block text-sm sm:text-base font-semibold text-[#023047] mb-2 uppercase tracking-wide"
              > 
                CONFIRM PASSWORD 
              </label>
              <input 
                type="password" 
                id="cnfpswd"
                placeholder='Confirm password'
                name="ConfirmPassword" 
                value={signUpData.ConfirmPassword} 
                onChange={handleChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-xl border-2 border-gray-200 focus:border-[#023047] focus:ring-4 focus:ring-[#023047]/20 focus:outline-none transition-all duration-300 shadow-md hover:shadow-lg bg-white/80"
                required
                minLength="6"
              />
            </div>
          </div>

          <div className="pt-4 sm:pt-6">
            <button 
              type='submit'
              className="w-full bg-gradient-to-r from-[#5AC5DE] to-[#053440] text-white font-medium text-base sm:text-lg lg:text-xl py-3 sm:py-4 px-6 rounded-xl shadow-lg hover:shadow-xl hover:from-[#4FB5CE] hover:to-[#042A35] hover:font-bold transform hover:scale-[1.02] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#5AC5DE]/30"
            >
              Sign Up
            </button>
          </div>

          <div className="pt-4 text-center">
            <p className="text-sm sm:text-base text-gray-600">
              Already have an account?{' '}
              <Link to="/Signin" className="text-[#023047] font-semibold hover:text-[#5AC5DE] transition-colors duration-200">
                Sign in here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup