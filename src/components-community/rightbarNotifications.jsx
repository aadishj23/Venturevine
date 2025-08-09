import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function RightbarNotifications() {
  const location = useLocation()
  
  const quickActions = [
    { name: 'Notifications', rightbar: 'notifications', icon: '🔔', count: 5, active: true },
    { name: 'Messages', rightbar: 'messages', icon: '💬', count: 3 },
    { name: 'Collaboration', rightbar: 'collaboration', icon: '🤝', count: 2 }
  ]
  
  // Helper function to create URL with rightbar query parameter
  const createRightbarUrl = (rightbarType) => {
    return `${location.pathname}?rightbar=${rightbarType}`
  }

  const notifications = [
    {
      id: 1,
      type: 'like',
      message: 'Sarah Chen liked your post about MVP development',
      time: '5 minutes ago',
      unread: true,
      icon: '👍'
    },
    {
      id: 2,
      type: 'comment',
      message: 'Marcus Rodriguez commented on your startup pitch',
      time: '1 hour ago',
      unread: true,
      icon: '💬'
    },
    {
      id: 3,
      type: 'follow',
      message: 'Emily Watson started following you',
      time: '2 hours ago',
      unread: true,
      icon: '👤'
    },
    {
      id: 4,
      type: 'event',
      message: 'Reminder: Startup Pitch Night tomorrow at 6 PM',
      time: '3 hours ago',
      unread: false,
      icon: '📅'
    },
    {
      id: 5,
      type: 'mention',
      message: 'David Kim mentioned you in a discussion about marketing strategies',
      time: '1 day ago',
      unread: false,
      icon: '🏷️'
    },
    {
      id: 6,
      type: 'group',
      message: 'New post in Tech Founders Circle group',
      time: '2 days ago',
      unread: false,
      icon: '👥'
    }
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case 'like': return 'text-red-400'
      case 'comment': return 'text-blue-400'
      case 'follow': return 'text-green-400'
      case 'event': return 'text-yellow-400'
      case 'mention': return 'text-purple-400'
      case 'group': return 'text-orange-400'
      default: return 'text-wheat/60'
    }
  }

  return (
    <div className='flex flex-col bg-gradient-to-br from-white to-slate-50 w-full h-full max-w-sm lg:max-w-xs xl:max-w-sm mx-2 my-2 lg:mx-4 lg:my-4 rounded-3xl text-slate-800 overflow-hidden shadow-xl border border-slate-200/50'>
        {/* Quick Actions */}
        <div className='flex justify-evenly p-4 sm:p-6 border-b border-slate-200/50 bg-gradient-to-r from-blue-50/50 to-cyan-50/50'>
            {quickActions.map((action, index) => (
                <Link key={index} to={createRightbarUrl(action.rightbar)} className='relative group'>
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg ${
                        action.active ? 'bg-gradient-to-br from-blue-200 to-cyan-200' : 'bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200'
                    }`}>
                        <span className='text-xl sm:text-2xl'>{action.icon}</span>
                        {action.count > 0 && (
                            <span className='absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium shadow-md'>
                                {action.count}
                            </span>
                        )}
                    </div>
                    <p className='text-xs text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-600 font-medium'>
                        {action.name}
                    </p>
                </Link>
            ))}
        </div>

        {/* Notifications Section */}
        <div className='flex-1 overflow-y-auto p-4 sm:p-6'>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-bold flex items-center bg-gradient-to-r from-[#023047] to-[#034561] bg-clip-text text-transparent'>
                    <span className='w-6 h-6 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mr-3 text-sm shadow-sm'>🔔</span>
                    Notifications
                </h3>
                <button className='text-xs bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 px-2 py-1 rounded-full transition-all duration-300 text-slate-700 shadow-sm border border-blue-200/50'>
                    Mark All Read
                </button>
            </div>

            <div className='space-y-2 max-h-96 overflow-y-auto'>
                {notifications.map((notification) => (
                    <div key={notification.id} className={`p-3 rounded-xl hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
                        notification.unread ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border-l-2 border-blue-300' : 'bg-gradient-to-r from-slate-50 to-blue-50'
                    }`}>
                        <div className='flex items-start gap-3'>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${
                                notification.unread ? 'bg-gradient-to-br from-blue-200 to-cyan-200' : 'bg-gradient-to-br from-slate-100 to-blue-100'
                            }`}>
                                <span className='text-sm'>{notification.icon}</span>
                            </div>
                            <div className='flex-1 min-w-0'>
                                <p className={`text-sm leading-relaxed mb-1 ${
                                    notification.unread ? 'text-slate-700 font-medium' : 'text-slate-600'
                                }`}>
                                    {notification.message}
                                </p>
                                <div className='flex items-center justify-between'>
                                    <p className='text-xs text-slate-500'>{notification.time}</p>
                                    {notification.unread && (
                                        <span className='w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex-shrink-0 shadow-sm'></span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-4 space-y-2'>
                <button className='w-full px-3 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 rounded-lg text-sm font-medium transition-all duration-300 text-slate-700 shadow-md hover:shadow-lg border border-blue-200/50'>
                    View All Notifications
                </button>
                <button className='w-full px-3 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200 rounded-lg text-sm font-medium transition-all duration-300 text-slate-700 shadow-md hover:shadow-lg border border-emerald-200/50'>
                    Notification Settings
                </button>
            </div>
        </div>
    </div>
  )
}

export default RightbarNotifications