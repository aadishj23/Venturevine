import React from 'react'
import Rfund from '../assets/raise-fund.jpg'
import { Link } from 'react-router-dom';
import Fund from '../assets/funding.jpg'

function Investment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#023047] via-[#034a6b] to-[#023047] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Investment <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#88daee] to-[#5AC5DE]">Opportunities</span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto px-4 leading-relaxed">
            Discover the perfect path for your financial journey - whether raising capital or building your investment portfolio
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Raise Capital Card */}
          <div className="group relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 h-full transform transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20">
              <div className="text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-gradient-to-br from-[#88daee] to-[#5AC5DE] rounded-full flex items-center justify-center shadow-lg shadow-[#88daee]/20">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#023047]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#88daee] mb-4 leading-tight">
                    Raise Capital
                  </h2>
                  
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed px-2">
                    Explore a myriad of funding opportunities tailored to your startup's needs. Connect with investors who believe in your vision.
                  </p>
                </div>

                <div className="space-y-6">
                  <img 
                    src={Rfund} 
                    alt="Raise Capital" 
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl shadow-2xl shadow-black/30 transition-transform duration-300 group-hover:scale-105" 
                  />
                  
                  <button className="w-full bg-gradient-to-r from-[#5AC5DE] to-[#316A78] text-black font-semibold text-sm sm:text-base lg:text-lg px-6 py-3 sm:py-4 rounded-xl hover:from-[#4FB5CE] hover:to-[#285A68] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#5AC5DE]/25 active:scale-95">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Start Investing Card */}
          <div className="group relative">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 h-full transform transition-all duration-500 hover:scale-105 hover:bg-white/10 hover:border-white/20">
              <div className="text-center h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-6 bg-gradient-to-br from-[#88daee] to-[#5AC5DE] rounded-full flex items-center justify-center shadow-lg shadow-[#88daee]/20">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-[#023047]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#88daee] mb-4 leading-tight">
                    Start Investing
                  </h2>
                  
                  <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 leading-relaxed px-2">
                    Buy shares of your favorite early stage startups and companies. Build wealth through strategic investments.
                  </p>
                </div>

                <div className="space-y-6">
                  <img 
                    src={Fund} 
                    alt="Start Investing" 
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-xl shadow-2xl shadow-black/30 transition-transform duration-300 group-hover:scale-105" 
                  />
                  
                  <Link to='/' className="block w-full">
                    <button className="w-full bg-gradient-to-r from-[#5AC5DE] to-[#316A78] text-black font-semibold text-sm sm:text-base lg:text-lg px-6 py-3 sm:py-4 rounded-xl hover:from-[#4FB5CE] hover:to-[#285A68] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#5AC5DE]/25 active:scale-95">
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <p className="text-gray-400 text-sm sm:text-base mb-4">
            Ready to take the next step?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-6 py-3 border border-[#88daee] text-[#88daee] rounded-lg hover:bg-[#88daee] hover:text-[#023047] transition-all duration-300 font-medium">
              Learn More
            </button>
            <button className="px-6 py-3 bg-[#88daee] text-[#023047] rounded-lg hover:bg-[#5AC5DE] transition-all duration-300 font-medium">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Investment