import React from 'react'

function Middlebardiscover() {
  return (
    <div className='mx-2 sm:mx-4 lg:mx-6 px-2 sm:px-4 h-full flex flex-col'>
        <div className="mt-3 sm:mt-4">
            <input 
                type="text" 
                placeholder="🔍 Search for content..." 
                className="block w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl bg-white border-2 border-slate-200 text-slate-700 placeholder:text-slate-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400 focus:shadow-xl transition-all duration-300"
            />
        </div>
        <div className='bg-gradient-to-br from-white to-slate-50 flex-1 mt-4 sm:mt-6 lg:mt-8 rounded-3xl p-4 sm:p-6 lg:p-8 text-slate-800 shadow-xl border border-slate-200/50 flex flex-col overflow-y-auto'> 
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-0">
                    Discover
                </h1>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-blue-200/50">
                        Trending
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-cyan-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-emerald-200/50">
                        Latest
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-purple-200/50">
                        Popular
                    </button>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 flex-1">
                {/* Content cards */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200/30 rounded-2xl p-4 sm:p-6 hover:from-blue-100 hover:to-cyan-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full mr-3 flex items-center justify-center shadow-md">
                            <span className="text-white text-sm font-bold">F</span>
                        </div>
                        <div>
                            <p className="font-semibold text-sm sm:text-base text-slate-800">@founder_name</p>
                            <p className="text-xs sm:text-sm text-slate-600">2 hours ago</p>
                        </div>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-3">
                        Discover amazing startups and connect with fellow entrepreneurs in your industry...
                    </p>
                    <div className="flex items-center justify-between mt-4 text-sm">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">💡 Innovation</span>
                        <span className="text-slate-600">24 likes</span>
                    </div>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/30 rounded-2xl p-4 sm:p-6 hover:from-emerald-100 hover:to-teal-100 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mr-3 flex items-center justify-center shadow-md">
                            <span className="text-white text-sm font-bold">S</span>
                        </div>
                        <div>
                            <p className="font-semibold text-sm sm:text-base text-slate-800">@startup_guru</p>
                            <p className="text-xs sm:text-sm text-slate-600">5 hours ago</p>
                        </div>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-3">
                        Just closed our Series A! Here are the key lessons learned during the fundraising process...
                    </p>
                    <div className="flex items-center justify-between mt-4 text-sm">
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs font-medium">💰 Funding</span>
                        <span className="text-slate-600">156 likes</span>
                    </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200/30 rounded-2xl p-4 sm:p-6 hover:from-purple-100 hover:to-pink-100 hover:shadow-lg transition-all duration-300 cursor-pointer md:col-span-2 lg:col-span-1">
                    <div className="flex items-center mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mr-3 flex items-center justify-center shadow-md">
                            <span className="text-white text-sm font-bold">T</span>
                        </div>
                        <div>
                            <p className="font-semibold text-sm sm:text-base text-slate-800">@tech_founder</p>
                            <p className="text-xs sm:text-sm text-slate-600">1 day ago</p>
                        </div>
                    </div>
                    <p className="text-sm sm:text-base leading-relaxed text-slate-700 mb-3">
                        Building in public: Our journey from idea to MVP in 90 days. Tools, challenges, and wins...
                    </p>
                    <div className="flex items-center justify-between mt-4 text-sm">
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">🚀 Product</span>
                        <span className="text-slate-600">89 likes</span>
                    </div>
                </div>
            </div>
            
            <div className="mt-8 text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-blue-100 hover:to-cyan-100 text-slate-700 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50">
                    Load More Content
                </button>
            </div>
        </div>
    </div>
  )
}

export default Middlebardiscover