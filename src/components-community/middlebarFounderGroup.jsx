import React from 'react'

function MiddlebarFounderGroup() {
  const founderGroups = [
    {
      id: 1,
      name: "Tech Founders Circle",
      members: 234,
      description: "A community of technology entrepreneurs sharing insights, challenges, and success stories.",
      category: "Technology",
      privacy: "Private",
      activity: "Very Active",
      recentPost: "Discussion about AI integration in startups",
      lastActive: "2 hours ago"
    },
    {
      id: 2,
      name: "Female Entrepreneurs Network",
      members: 189,
      description: "Empowering women founders through mentorship, networking, and collaborative growth.",
      category: "Diversity & Inclusion",
      privacy: "Public",
      activity: "Active",
      recentPost: "Fundraising strategies for women-led startups",
      lastActive: "5 hours ago"
    },
    {
      id: 3,
      name: "SaaS Startup Collective",
      members: 156,
      description: "Building and scaling Software as a Service businesses together.",
      category: "SaaS",
      privacy: "Private",
      activity: "Moderate",
      recentPost: "Customer churn analysis and retention strategies",
      lastActive: "1 day ago"
    },
    {
      id: 4,
      name: "Fintech Innovators Hub",
      members: 98,
      description: "Revolutionizing financial services through innovative technology solutions.",
      category: "Fintech",
      privacy: "Public",
      activity: "Active",
      recentPost: "Regulatory compliance in digital payments",
      lastActive: "3 hours ago"
    }
  ]

  const getActivityColor = (activity) => {
    switch (activity) {
      case 'Very Active': return 'text-green-600'
      case 'Active': return 'text-amber-600'
      case 'Moderate': return 'text-blue-600'
      default: return 'text-slate-600'
    }
  }

  const getPrivacyIcon = (privacy) => {
    return privacy === 'Private' ? '🔒' : '🌐'
  }

  return (
    <div className='mx-2 sm:mx-4 lg:mx-6 px-2 sm:px-4 min-h-full flex flex-col'>
        <div className="mt-3 sm:mt-4">
            <input 
                type="text" 
                placeholder="🔍 Search groups..." 
                className="block w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl bg-white border-2 border-slate-200 text-slate-700 placeholder:text-slate-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400 focus:shadow-xl transition-all duration-300"
            />
        </div>
        <div className='bg-gradient-to-br from-white to-slate-50 flex-1 mt-4 sm:mt-6 lg:mt-8 rounded-3xl p-4 sm:p-6 lg:p-8 text-slate-800 shadow-xl border border-slate-200/50 flex flex-col'> 
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-0">
                    Founder Groups
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-blue-200/50">
                        All Groups
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-emerald-200/50">
                        My Groups
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-purple-200/50">
                        Public
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {founderGroups.map(group => (
                    <div key={group.id} className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/50 rounded-2xl p-4 sm:p-6 hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">{group.name}</h3>
                                    <span className="text-sm">{getPrivacyIcon(group.privacy)}</span>
                                </div>
                                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-slate-600 mb-3">
                                    <span className="flex items-center gap-1">👥 {group.members} members</span>
                                    <span className={`font-medium ${getActivityColor(group.activity)}`}>
                                        ● {group.activity}
                                    </span>
                                    <span className="bg-gradient-to-r from-blue-100 to-cyan-100 text-slate-700 px-2 py-1 rounded-full font-medium border border-blue-200/50">
                                        {group.category}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm sm:text-base text-slate-700 mb-4 leading-relaxed">
                            {group.description}
                        </p>

                        <div className="bg-slate-100/50 border border-slate-200/30 rounded-lg p-3 mb-4">
                            <p className="text-xs sm:text-sm text-slate-600 mb-1 font-medium">Recent Activity:</p>
                            <p className="text-sm text-slate-800 mb-2">{group.recentPost}</p>
                            <p className="text-xs text-slate-600">{group.lastActive}</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-slate-200 hover:to-blue-200 text-slate-700 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50">
                                View Group
                            </button>
                            <button className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                                {group.privacy === 'Private' ? 'Request Join' : 'Join Group'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-blue-100 hover:to-cyan-100 text-slate-700 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50 mr-4">
                    Discover More Groups
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                    Create New Group
                </button>
            </div>
        </div>
    </div>
  )
}

export default MiddlebarFounderGroup