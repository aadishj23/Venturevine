import React from 'react'

function Middlebar() {
  return (
    <div className='mx-2 sm:mx-4 lg:mx-6 px-2 sm:px-4 min-h-full flex flex-col'>
      <div className="mt-3 sm:mt-4 lg:mt-6">
        <input 
          type="text" 
          placeholder="🔍 Search community..." 
          className="block w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3 md:py-3 lg:py-3 text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl bg-white border-2 border-slate-200 text-slate-700 placeholder:text-slate-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400 focus:shadow-xl transition-all duration-300"
        />
      </div>
      <div className='bg-gradient-to-br from-white to-slate-50 flex-1 mt-4 sm:mt-6 lg:mt-8 rounded-3xl p-4 sm:p-6 lg:p-8 text-slate-800 shadow-xl border border-slate-200/50 flex flex-col'>
        <div className="flex flex-col items-center justify-center flex-1">
          <div className="text-center max-w-md mx-auto">
            <div className='w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 shadow-lg'>
              <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-600" fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-[#023047] to-[#034561] bg-clip-text text-transparent">
              Welcome to the Community
            </h2>
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-slate-600 leading-relaxed mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-0">
              Connect with fellow entrepreneurs, share ideas, and build meaningful relationships. 
              Use the search above to find specific content or explore different community sections.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-slate-700 rounded-xl text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg border border-blue-200/50">
                Explore Posts
              </button>
              <button className="px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-cyan-200 text-slate-700 rounded-xl text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg border border-emerald-200/50">
                Find Events
              </button>
              <button className="px-4 py-3 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-slate-700 rounded-xl text-sm sm:text-base lg:text-lg font-medium transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg border border-purple-200/50">
                Join Groups
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Middlebar