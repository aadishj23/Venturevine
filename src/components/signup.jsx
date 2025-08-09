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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#88daee] to-[#5AC5DE]">
              VentureVine
            </h1>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
            Join VentureVine
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-md mx-auto leading-relaxed">
            Create your account and start your entrepreneurial journey today
          </p>
        </div>

        {/* Form Card */}
        <div className="group">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl shadow-black/30 p-6 sm:p-8 md:p-10 lg:p-12 transform transition-all duration-500 hover:scale-[1.02] hover:bg-white/15 hover:border-white/30">
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Name Field */}
              <div className="group/field">
                <label 
                  htmlFor="name" 
                  className="block text-sm sm:text-base font-semibold text-white mb-3 uppercase tracking-wider"
                > 
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input 
                    type='text' 
                    id='name'
                    placeholder='Enter your full name' 
                    name="Name" 
                    value={signUpData.Name} 
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 sm:py-5 text-base sm:text-lg rounded-2xl border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 focus:border-[#88daee] focus:ring-4 focus:ring-[#88daee]/20 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl hover:border-white/30 hover:bg-white/15"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="group/field">
                <label 
                  htmlFor="email" 
                  className="block text-sm sm:text-base font-semibold text-white mb-3 uppercase tracking-wider"
                > 
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <input 
                    type="email" 
                    id="email"
                    placeholder='Enter your email address' 
                    name="Email" 
                    value={signUpData.Email} 
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 sm:py-5 text-base sm:text-lg rounded-2xl border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 focus:border-[#88daee] focus:ring-4 focus:ring-[#88daee]/20 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl hover:border-white/30 hover:bg-white/15"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="group/field">
                <label 
                  htmlFor="password" 
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
                    id="password"
                    placeholder='Create a strong password'
                    name="Password" 
                    value={signUpData.Password} 
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 sm:py-5 text-base sm:text-lg rounded-2xl border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 focus:border-[#88daee] focus:ring-4 focus:ring-[#88daee]/20 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl hover:border-white/30 hover:bg-white/15"
                    required
                    minLength="6"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2 ml-1">Minimum 6 characters</p>
              </div>

              {/* Confirm Password Field */}
              <div className="group/field">
                <label 
                  htmlFor="cnfpswd" 
                  className="block text-sm sm:text-base font-semibold text-white mb-3 uppercase tracking-wider"
                > 
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <input 
                    type="password" 
                    id="cnfpswd"
                    placeholder='Confirm your password'
                    name="ConfirmPassword" 
                    value={signUpData.ConfirmPassword} 
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 sm:py-5 text-base sm:text-lg rounded-2xl border-2 border-white/20 bg-white/10 text-white placeholder-gray-300 focus:border-[#88daee] focus:ring-4 focus:ring-[#88daee]/20 focus:outline-none transition-all duration-300 shadow-lg hover:shadow-xl hover:border-white/30 hover:bg-white/15"
                    required
                    minLength="6"
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-3 pt-2">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="mt-1 h-4 w-4 text-[#88daee] bg-white/10 border-white/20 rounded focus:ring-[#88daee] focus:ring-2"
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-300 leading-relaxed">
                  I agree to the{' '}
                  <a href="#" className="text-[#88daee] hover:text-[#5AC5DE] transition-colors duration-300 underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-[#88daee] hover:text-[#5AC5DE] transition-colors duration-300 underline">
                    Privacy Policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type='submit'
                  className="w-full bg-gradient-to-r from-[#88daee] to-[#5AC5DE] text-[#023047] font-bold text-base sm:text-lg lg:text-xl py-4 sm:py-5 px-8 rounded-2xl shadow-2xl shadow-black/50 hover:from-[#5AC5DE] hover:to-[#88daee] hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer transform active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#88daee]/30"
                >
                  Create Account
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-transparent text-gray-300 font-medium">Already have an account?</span>
                </div>
              </div>

              {/* Sign In Link */}
              <div className="text-center">
                <Link to="/Signin" className="inline-flex items-center justify-center w-full bg-transparent text-white font-semibold text-base sm:text-lg py-3 sm:py-4 px-6 rounded-2xl border-2 border-white/30 hover:border-white/50 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95">
                  Sign In to Existing Account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup