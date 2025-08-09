import React from 'react'

function MiddlebarRequests() {
  const requests = [
    {
      id: 1,
      type: "Help Request",
      title: "Need advice on MVP development",
      author: "@tech_founder",
      timeAgo: "2 hours ago",
      description: "Looking for guidance on building our first MVP. What features should we prioritize?",
      category: "Product Development",
      responses: 8,
      urgency: "Medium"
    },
    {
      id: 2,
      type: "Collaboration",
      title: "Seeking co-founder for FinTech startup",
      author: "@fintech_visionary",
      timeAgo: "5 hours ago",
      description: "Have a validated idea in the FinTech space. Looking for a technical co-founder to join the journey.",
      category: "Co-founder Search",
      responses: 15,
      urgency: "High"
    },
    {
      id: 3,
      type: "Resource Request",
      title: "Recommendations for legal services",
      author: "@startup_newbie",
      timeAgo: "1 day ago",
      description: "Need reliable legal advice for startup incorporation and IP protection. Any recommendations?",
      category: "Legal",
      responses: 12,
      urgency: "Low"
    },
    {
      id: 4,
      type: "Feedback Request",
      title: "Review my pitch deck",
      author: "@entrepreneur_mike",
      timeAgo: "2 days ago",
      description: "Preparing for investor meetings. Would love feedback on my pitch deck structure and content.",
      category: "Fundraising",
      responses: 6,
      urgency: "Medium"
    }
  ]

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'High': return 'text-red-600'
      case 'Medium': return 'text-amber-600'
      case 'Low': return 'text-green-600'
      default: return 'text-slate-600'
    }
  }

  return (
    <div className='mx-2 sm:mx-4 lg:mx-6 px-2 sm:px-4 min-h-full flex flex-col'>
        <div className="mt-3 sm:mt-4">
            <input 
                type="text" 
                placeholder="🔍 Search requests..." 
                className="block w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl bg-white border-2 border-slate-200 text-slate-700 placeholder:text-slate-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400 focus:shadow-xl transition-all duration-300"
            />
        </div>
        <div className='bg-gradient-to-br from-white to-slate-50 flex-1 mt-4 sm:mt-6 lg:mt-8 rounded-3xl p-4 sm:p-6 lg:p-8 text-slate-800 shadow-xl border border-slate-200/50 flex flex-col'> 
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-0">
                    Community Requests
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-blue-200/50">
                        All Requests
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-red-200/50">
                        Urgent
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-emerald-200/50">
                        My Requests
                    </button>
                </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
                {requests.map(request => (
                    <div key={request.id} className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/50 rounded-2xl p-4 sm:p-6 hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs bg-gradient-to-r from-blue-100 to-cyan-100 text-slate-700 px-2 py-1 rounded-full font-medium border border-blue-200/50">
                                            {request.type}
                                        </span>
                                        <span className={`text-xs font-medium ${getUrgencyColor(request.urgency)}`}>
                                            {request.urgency} Priority
                                        </span>
                                    </div>
                                    <span className="text-xs text-slate-600 font-medium">{request.category}</span>
                                </div>
                                
                                <h3 className="text-lg sm:text-xl font-bold mb-2 text-slate-800">{request.title}</h3>
                                <p className="text-sm sm:text-base text-slate-700 mb-3 leading-relaxed">
                                    {request.description}
                                </p>
                                
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-slate-600">
                                    <span>👤 {request.author}</span>
                                    <span>🕐 {request.timeAgo}</span>
                                    <span>💬 {request.responses} responses</span>
                                </div>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:ml-6">
                                <button className="px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-slate-200 hover:to-blue-200 text-slate-700 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50">
                                    View Details
                                </button>
                                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                                    Respond
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-blue-100 hover:to-cyan-100 text-slate-700 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50 mr-4">
                    Load More Requests
                </button>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                    Create Request
                </button>
            </div>
        </div>
    </div>
  )
}

export default MiddlebarRequests