import React from 'react'
import { Link } from 'react-router-dom'

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
  
  function handleSubmitSignIn(event){
    event.preventDefault()
    // Database request
  }
  
  return (
    <div className='min-h-screen w-full bg-gradient-to-br from-[#023047] via-[#034a6b] to-[#023047] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 relative overflow-hidden'>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-60"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#88daee]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#5AC5DE]/20 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#88daee] to-[#5AC5DE] rounded-full flex items-center justify-center shadow-2xl shadow-black/30 mr-4">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#88daee] to-[#5AC5DE]">
              VentureVine
            </h1>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Welcome Back
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-md mx-auto leading-relaxed">
            Sign in to your account and continue your entrepreneurial journey
          </p>
        </div>

        {/* Form Card */}
        <div className="group">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl shadow-black/30 p-6 sm:p-8 md:p-10 lg:p-12 transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/15 hover:border-white/30">
            <form onSubmit={handleSubmitSignIn} className="space-y-6 sm:space-y-8">
              {/* Email/Phone Field */}
              <div className="group/field">
                <label 
                  htmlFor="email-phone" 
                  className="block text-sm sm:text-base font-semibold text-white mb-3 uppercase tracking-wider"
                > 
                  Email or Phone
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    id='email-phone'
                    placeholder='Enter your email or phone' 
                    name="Name" 
                    value={signInData.Name} 
                    onChange={handleChangeSignIn}
                    className="w-full pl-12 pr-4 py-4 sm:py-5 text-base sm:text-lg rounded-2xl border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 focus:border-[#88daee] focus:ring-4 focus:ring-[#88daee]/20 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl hover:border-white/30 hover:bg-white/15"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="group/field">
                <label 
                  htmlFor="pswd" 
                  className="block text-sm sm:text-base font-semibold text-white mb-3 uppercase tracking-wider"
                > 
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <input 
                    type="password" 
                    id='pswd'
                    placeholder='Enter your password' 
                    name="Password" 
                    value={signInData.Password} 
                    onChange={handleChangeSignIn}
                    className="w-full pl-12 pr-4 py-4 sm:py-5 text-base sm:text-lg rounded-2xl border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 focus:border-[#88daee] focus:ring-4 focus:ring-[#88daee]/20 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl hover:border-white/30 hover:bg-white/15"
                    required
                  />
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <a href="#" className="text-sm text-[#88daee] hover:text-[#5AC5DE] transition-colors duration-300 font-medium">
                  Forgot your password?
                </a>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type='submit'
                  className="w-full bg-gradient-to-r from-[#88daee] to-[#5AC5DE] text-[#023047] font-bold text-base sm:text-lg lg:text-xl py-4 sm:py-5 px-8 rounded-2xl shadow-2xl shadow-black/50 hover:from-[#5AC5DE] hover:to-[#88daee] hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#88daee]/30"
                >
                  Sign In
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-gray-300 font-medium">New to VentureVine?</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center">
                <Link to="/Signup" className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-base sm:text-lg py-3 sm:py-4 px-6 rounded-2xl border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Create New Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin