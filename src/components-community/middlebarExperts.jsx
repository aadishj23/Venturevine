import React from 'react'

function MiddlebarExperts() {
  const experts = [
    {
      id: 1,
      name: "Sarah Chen",
      title: "VP of Product",
      company: "TechVentures Inc.",
      expertise: ["Product Strategy", "User Experience", "Market Research"],
      rating: 4.9,
      sessions: 127,
      price: "$150/hr",
      available: true
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      title: "Startup Advisor",
      company: "Innovation Partners",
      expertise: ["Fundraising", "Business Strategy", "Scaling"],
      rating: 4.8,
      sessions: 89,
      price: "$200/hr",
      available: false
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      title: "Chief Technology Officer",
      company: "AI Dynamics",
      expertise: ["Technology", "AI/ML", "Software Architecture"],
      rating: 4.9,
      sessions: 156,
      price: "$175/hr",
      available: true
    },
    {
      id: 4,
      name: "David Kim",
      title: "Marketing Director",
      company: "Growth Labs",
      expertise: ["Digital Marketing", "Brand Strategy", "Growth Hacking"],
      rating: 4.7,
      sessions: 203,
      price: "$120/hr",
      available: true
    }
  ]

  return (
    <div className='mx-2 sm:mx-4 lg:mx-6 px-2 sm:px-4 h-full flex flex-col'>
        <div className="mt-3 sm:mt-4">
            <input 
                type="text" 
                placeholder="🔍 Search experts..." 
                className="block w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl bg-white border-2 border-slate-200 text-slate-700 placeholder:text-slate-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400 focus:shadow-xl transition-all duration-300"
            />
        </div>
        <div className='bg-gradient-to-br from-white to-slate-50 flex-1 mt-4 sm:mt-6 lg:mt-8 rounded-3xl p-4 sm:p-6 lg:p-8 text-slate-800 shadow-xl border border-slate-200/50 flex flex-col overflow-y-auto'> 
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-0">
                    Industry Experts
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-blue-200/50">
                        All
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-emerald-200/50">
                        Available
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-amber-100 to-orange-100 hover:from-amber-200 hover:to-orange-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-amber-200/50">
                        Top Rated
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {experts.map(expert => (
                    <div key={expert.id} className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/50 rounded-2xl p-4 sm:p-6 hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start space-x-4 mb-4">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                <span className="text-lg sm:text-xl font-bold text-white">
                                    {expert.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                    <h3 className="text-base sm:text-lg font-bold truncate text-slate-800">{expert.name}</h3>
                                    {expert.available && (
                                        <span className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0 shadow-sm"></span>
                                    )}
                                </div>
                                <p className="text-sm text-slate-700 mb-1 font-medium">{expert.title}</p>
                                <p className="text-xs text-slate-600">{expert.company}</p>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p className="text-xs sm:text-sm text-slate-600 mb-2 font-medium">Expertise:</p>
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                {expert.expertise.map((skill, index) => (
                                    <span key={index} className="text-xs bg-gradient-to-r from-purple-100 to-pink-100 text-slate-700 px-2 py-1 rounded-full font-medium border border-purple-200/50">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600 mb-4">
                            <div className="flex items-center space-x-4">
                                <span className="flex items-center gap-1">⭐ {expert.rating}</span>
                                <span className="flex items-center gap-1">💬 {expert.sessions} sessions</span>
                            </div>
                            <span className="font-bold text-slate-800">{expert.price}</span>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <button 
                                className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg ${
                                    expert.available 
                                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white' 
                                    : 'bg-gradient-to-r from-slate-200 to-slate-300 text-slate-500 cursor-not-allowed'
                                }`}
                                disabled={!expert.available}
                            >
                                {expert.available ? 'Book Session' : 'Unavailable'}
                            </button>
                            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-slate-200 hover:to-blue-200 text-slate-700 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50">
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-blue-100 hover:to-cyan-100 text-slate-700 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50">
                    View All Experts
                </button>
            </div>
        </div>
    </div>
  )
}

export default MiddlebarExperts