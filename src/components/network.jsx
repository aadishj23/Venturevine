import React from 'react'
import { Link } from 'react-router-dom'
import netimg from '../assets/networking.jpeg'

function Network() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#8cc2da] via-[#7bb8d1] to-[#6ba4c4] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-60"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#88daee]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#5AC5DE]/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16 xl:gap-20">
                {/* Image Section */}
                <div className="flex-shrink-0 order-2 lg:order-1 group">
                    <div className="relative">
                        <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-black/30 transition-all duration-500 group-hover:shadow-[#023047]/50">
                            <img 
                                src={netimg} 
                                alt='Networking' 
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        
                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#023047]/20 to-[#023047]/40 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#88daee] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                        <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-[#5AC5DE] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div className='flex flex-col items-center text-center lg:text-left lg:items-start text-[#023047] max-w-xl xl:max-w-2xl order-1 lg:order-2'>
                    {/* Icon and Title */}
                    <div className="inline-flex items-center justify-center lg:justify-start mb-6">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#023047] to-[#034a6b] rounded-full flex items-center justify-center shadow-2xl shadow-black/30 mr-4">
                            <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#023047] to-[#034a6b]">
                            Grow Your Network
                        </h1>
                    </div>
                    
                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-center lg:text-left mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-md sm:max-w-lg lg:max-w-none font-medium opacity-90">
                        Connect with like-minded founders, industry experts, mentors, and potential collaborators in our vibrant founder community. Share experiences, exchange insights, and forge valuable connections that can propel your startup forward.
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3 mb-8 sm:mb-10 lg:mb-12 text-left">
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-[#88daee] rounded-full mr-3"></div>
                            <span className="text-sm sm:text-base lg:text-lg text-[#023047] font-medium">Access to exclusive founder groups</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-[#88daee] rounded-full mr-3"></div>
                            <span className="text-sm sm:text-base lg:text-lg text-[#023047] font-medium">Direct mentorship opportunities</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-[#88daee] rounded-full mr-3"></div>
                            <span className="text-sm sm:text-base lg:text-lg text-[#023047] font-medium">Industry networking events</span>
                        </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Link to='/community' className="group">
                        <button className="bg-gradient-to-r from-[#023047] to-[#034a6b] text-white px-8 sm:px-10 lg:px-12 py-4 sm:py-5 rounded-3xl text-base sm:text-lg lg:text-xl font-semibold shadow-2xl shadow-black/50 hover:from-[#034a6b] hover:to-[#023047] hover:shadow-xl hover:scale-105 transition-all duration-500 cursor-pointer transform active:scale-95">
                            Join Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Network