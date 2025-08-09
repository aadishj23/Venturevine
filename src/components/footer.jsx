import React from 'react'
import Logo from '../assets/logo.jpg'
import Phone from '../assets/Phone.png'
import Mail from '../assets/mail.png'
import Facebook from '../assets/facebook.png'
import Linkedin from '../assets/linkedin.png'
import X from '../assets/X.png'

function Footer() {
  return (
    <div className='bg-gradient-to-br from-[#023047] via-[#034a6b] to-[#023047] text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24'>
        {/* Main Footer Content */}
        <div className='max-w-7xl mx-auto'>
            {/* Header Section */}
            <div className='text-center mb-16 sm:mb-20 lg:mb-24'>
                <div className='inline-flex items-center justify-center mb-6'>
                    <img src={Logo} alt="VentureVine Logo" className='h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 rounded-2xl shadow-2xl shadow-black/30 mr-4' />
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#88daee] to-[#5AC5DE]'>
                        VentureVine
                    </h2>
                </div>
                <p className='text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed'>
                    Empowering entrepreneurs worldwide with comprehensive support at every step of their journey
                </p>
            </div>

            {/* Main Footer Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24'>
                {/* Contact Section */}
                <div className='group'>
                    <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 h-full transform transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20'>
                        <div className='text-center md:text-left'>
                            <div className='w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-[#88daee] to-[#5AC5DE] rounded-full flex items-center justify-center shadow-lg shadow-[#88daee]/20'>
                                <svg className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#023047]' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            
                            <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-[#88daee]'>Get In Touch</h3>
                            
                            <div className='space-y-4'>
                                <div className='flex items-center justify-center md:justify-start group/item'>
                                    <div className='w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-[#88daee]/20 transition-all duration-300'>
                                        <img src={Phone} alt="Phone" className='h-5 w-5 sm:h-6 sm:w-6 opacity-90' />
                                    </div>
                                    <div>
                                        <p className='text-xs text-gray-400 uppercase tracking-wider'>Phone</p>
                                        <p className='text-base sm:text-lg font-medium'>+91 7876531158</p>
                                    </div>
                                </div>
                                
                                <div className='flex items-center justify-center md:justify-start group/item'>
                                    <div className='w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center mr-3 group-hover/item:bg-[#88daee]/20 transition-all duration-300'>
                                        <img src={Mail} alt="Email" className='h-5 w-5 sm:h-6 sm:w-6 opacity-90' />
                                    </div>
                                    <div>
                                        <p className='text-xs text-gray-400 uppercase tracking-wider'>Email</p>
                                        <p className='text-base sm:text-lg font-medium'>venturevine@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className='group'>
                    <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 h-full transform transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20'>
                        <div className='text-center md:text-left'>
                            <div className='w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-[#88daee] to-[#5AC5DE] rounded-full flex items-center justify-center shadow-lg shadow-[#88daee]/20'>
                                <svg className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#023047]' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            
                            <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-[#88daee]'>About Us</h3>
                            
                            <p className='text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-6'>
                                We are a comprehensive platform designed to support founders at every step of their entrepreneurial adventure, providing the tools, connections, and resources needed for success.
                            </p>
                            
                            <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
                                <span className='px-3 py-1 bg-[#88daee]/20 text-[#88daee] text-xs rounded-full border border-[#88daee]/30'>
                                    Startups
                                </span>
                                <span className='px-3 py-1 bg-[#88daee]/20 text-[#88daee] text-xs rounded-full border border-[#88daee]/30'>
                                    Funding
                                </span>
                                <span className='px-3 py-1 bg-[#88daee]/20 text-[#88daee] text-xs rounded-full border border-[#88daee]/30'>
                                    Community
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className='group'>
                    <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 h-full transform transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20'>
                        <div className='text-center md:text-left'>
                            <div className='w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto md:mx-0 mb-6 bg-gradient-to-br from-[#88daee] to-[#5AC5DE] rounded-full flex items-center justify-center shadow-lg shadow-[#88daee]/20'>
                                <svg className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#023047]' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 4h6" />
                                </svg>
                            </div>
                            
                            <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-6 text-[#88daee]'>Connect With Us</h3>
                            
                            <p className='text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8'>
                                Stay updated with the latest news, insights, and opportunities from the entrepreneurial world.
                            </p>
                            
                            <div className='flex justify-center md:justify-start space-x-4'>
                                <a href="#" className='group/social' aria-label="LinkedIn">
                                    <div className='w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/social:bg-[#88daee] group-hover/social:scale-110 group-hover/social:shadow-lg group-hover/social:shadow-[#88daee]/25'>
                                        <img 
                                            src={Linkedin} 
                                            alt="LinkedIn" 
                                            className='h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 group-hover/social:brightness-0' 
                                        />
                                    </div>
                                </a>
                                
                                <a href="#" className='group/social' aria-label="Twitter/X">
                                    <div className='w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/social:bg-[#88daee] group-hover/social:scale-110 group-hover/social:shadow-lg group-hover/social:shadow-[#88daee]/25'>
                                        <img 
                                            src={X} 
                                            alt="X" 
                                            className='h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 group-hover/social:brightness-0' 
                                        />
                                    </div>
                                </a>
                                
                                <a href="#" className='group/social' aria-label="Facebook">
                                    <div className='w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover/social:bg-[#88daee] group-hover/social:scale-110 group-hover/social:shadow-lg group-hover/social:shadow-[#88daee]/25'>
                                        <img 
                                            src={Facebook} 
                                            alt="Facebook" 
                                            className='h-6 w-6 sm:h-7 sm:w-7 transition-all duration-300 group-hover/social:brightness-0' 
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className='text-center mb-16 sm:mb-20 lg:mb-24'>
                <div className='bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-10 lg:p-12 max-w-2xl mx-auto'>
                    <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-[#88daee]'>Stay Updated</h3>
                    <p className='text-gray-300 text-sm sm:text-base lg:text-lg mb-6'>
                        Subscribe to our newsletter for the latest insights and opportunities
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                        <input 
                            type="email" 
                            placeholder="Enter your email" 
                            className='flex-1 max-w-sm px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#88daee] focus:bg-white/20 transition-all duration-300'
                        />
                        <button className='px-6 py-3 bg-gradient-to-r from-[#5AC5DE] to-[#316A78] text-black font-semibold rounded-lg hover:from-[#4FB5CE] hover:to-[#285A68] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#5AC5DE]/25 active:scale-95'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className='border-t border-white/20 pt-8 sm:pt-10'>
                <div className='text-center'>
                    <p className='text-sm sm:text-base text-white/80 mb-2'>
                        Copyright ©2024 VentureVine.com. All rights reserved
                    </p>
                    <p className='text-xs sm:text-sm text-white/60'>
                        Empowering entrepreneurs worldwide with innovative solutions and unwavering support
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer