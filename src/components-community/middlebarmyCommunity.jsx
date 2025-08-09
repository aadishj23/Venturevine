import React from 'react'

function MiddlebarmyCommunity() {
  const myActivities = [
    {
      id: 1,
      type: "post",
      content: "Just launched our MVP! Thanks to everyone who provided feedback during development.",
      timestamp: "2 hours ago",
      engagement: { likes: 24, comments: 8, shares: 3 },
      category: "Product Launch"
    },
    {
      id: 2,
      type: "comment",
      content: "Great insights on customer validation! This really helped me rethink our approach.",
      originalPost: "The importance of customer validation in early stage startups",
      timestamp: "1 day ago",
      engagement: { likes: 12, comments: 2 }
    },
    {
      id: 3,
      type: "event",
      content: "Attended Startup Pitch Night",
      eventDetails: "Innovation Hub, Downtown",
      timestamp: "3 days ago",
      engagement: { likes: 8, comments: 5 }
    }
  ]

  const myGroups = [
    { name: "Tech Founders Circle", role: "Member", notifications: 3 },
    { name: "SaaS Startup Collective", role: "Admin", notifications: 7 },
    { name: "Female Entrepreneurs Network", role: "Member", notifications: 1 }
  ]

  const myConnections = [
    { name: "Sarah Chen", title: "VP of Product", mutual: 12, status: "online" },
    { name: "Marcus Rodriguez", title: "Startup Advisor", mutual: 8, status: "offline" },
    { name: "Dr. Emily Watson", title: "CTO", mutual: 15, status: "online" },
    { name: "David Kim", title: "Marketing Director", mutual: 6, status: "offline" }
  ]

  const getTypeIcon = (type) => {
    switch (type) {
      case 'post': return '📝'
      case 'comment': return '💬'
      case 'event': return '📅'
      default: return '📋'
    }
  }

  return (
    <div className='mx-2 sm:mx-4 lg:mx-6 px-2 sm:px-4 min-h-full flex flex-col'>
        <div className="mt-3 sm:mt-4">
            <input 
                type="text" 
                placeholder="🔍 Search my community..." 
                className="block w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl bg-white border-2 border-slate-200 text-slate-700 placeholder:text-slate-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400 focus:shadow-xl transition-all duration-300"
            />
        </div>
        <div className='bg-gradient-to-br from-white to-slate-50 flex-1 mt-4 sm:mt-6 lg:mt-8 rounded-3xl p-4 sm:p-6 lg:p-8 text-slate-800 shadow-xl border border-slate-200/50 flex flex-col '> 
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
                    My Community Dashboard
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* Recent Activity */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/50 rounded-2xl p-4 sm:p-6">
                            <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center text-slate-800">
                                <span className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mr-3 shadow-md">
                                    📊
                                </span>
                                Recent Activity
                            </h3>
                            <div className="space-y-4">
                                {myActivities.map(activity => (
                                    <div key={activity.id} className="bg-white/50 border border-slate-200/30 rounded-xl p-4 hover:bg-blue-50/50 hover:shadow-md transition-all duration-300">
                                        <div className="flex items-start gap-3 mb-3">
                                            <span className="text-lg">{getTypeIcon(activity.type)}</span>
                                            <div className="flex-1">
                                                <p className="text-sm sm:text-base text-slate-800 mb-2 leading-relaxed">
                                                    {activity.content}
                                                </p>
                                                {activity.originalPost && (
                                                    <p className="text-xs text-slate-600 mb-2">
                                                        Replied to: "{activity.originalPost}"
                                                    </p>
                                                )}
                                                {activity.eventDetails && (
                                                    <p className="text-xs text-slate-600 mb-2">
                                                        📍 {activity.eventDetails}
                                                    </p>
                                                )}
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-slate-600">{activity.timestamp}</span>
                                                    <div className="flex items-center gap-4 text-xs text-slate-600">
                                                        <span className="flex items-center gap-1">👍 {activity.engagement.likes}</span>
                                                        <span className="flex items-center gap-1">💬 {activity.engagement.comments}</span>
                                                        {activity.engagement.shares && (
                                                            <span className="flex items-center gap-1">🔄 {activity.engagement.shares}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {activity.category && (
                                            <span className="text-xs bg-gradient-to-r from-blue-100 to-cyan-100 text-slate-700 px-2 py-1 rounded-full font-medium border border-blue-200/50">
                                                {activity.category}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 text-center">
                                <button className="px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-blue-100 hover:to-cyan-100 text-slate-700 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50">
                                    View All Activity
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* My Groups */}
                        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/50 rounded-2xl p-4 sm:p-6">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-slate-800">
                                <span className="w-6 h-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded flex items-center justify-center mr-3 text-sm shadow-md">
                                    👥
                                </span>
                                My Groups
                            </h3>
                            <div className="space-y-3">
                                {myGroups.map((group, index) => (
                                    <div key={index} className="flex items-center justify-between py-2">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate text-slate-800">{group.name}</p>
                                            <p className="text-xs text-slate-600">{group.role}</p>
                                        </div>
                                        {group.notifications > 0 && (
                                            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full ml-2">
                                                {group.notifications}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-blue-100 hover:to-cyan-100 text-slate-700 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50">
                                Manage Groups
                            </button>
                        </div>

                        {/* My Connections */}
                        <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/50 rounded-2xl p-4 sm:p-6">
                            <h3 className="text-lg font-bold mb-4 flex items-center text-slate-800">
                                <span className="w-6 h-6 bg-gradient-to-br from-blue-100 to-cyan-100 rounded flex items-center justify-center mr-3 text-sm shadow-md">
                                    🤝
                                </span>
                                Connections
                            </h3>
                            <div className="space-y-3">
                                {myConnections.map((connection, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                            <span className="text-xs font-bold text-white">
                                                {connection.name.split(' ').map(n => n[0]).join('')}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2">
                                                <p className="text-sm font-medium truncate text-slate-800">{connection.name}</p>
                                                <span className={`w-2 h-2 rounded-full shadow-sm ${
                                                    connection.status === 'online' ? 'bg-green-500' : 'bg-slate-400'
                                                }`}></span>
                                            </div>
                                            <p className="text-xs text-slate-600 truncate">{connection.title}</p>
                                            <p className="text-xs text-slate-500">{connection.mutual} mutual</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-blue-100 hover:to-cyan-100 text-slate-700 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50">
                                View All Connections
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiddlebarmyCommunity