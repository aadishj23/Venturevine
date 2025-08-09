import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function RightbarMessages() {
  const location = useLocation()
  
  const quickActions = [
    { name: 'Notifications', rightbar: 'notifications', icon: '🔔', count: 5 },
    { name: 'Messages', rightbar: 'messages', icon: '💬', count: 3, active: true },
    { name: 'Collaboration', rightbar: 'collaboration', icon: '🤝', count: 2 }
  ]
  
  // Helper function to create URL with rightbar query parameter
  const createRightbarUrl = (rightbarType) => {
    return `${location.pathname}?rightbar=${rightbarType}`
  }

  const messages = [
    {
      id: 1,
      sender: 'Sarah Chen',
      message: 'Thanks for the feedback on our MVP! Would love to discuss more...',
      time: '2 hours ago',
      unread: true,
      avatar: 'SC'
    },
    {
      id: 2,
      sender: 'Marcus Rodriguez',
      message: 'Great presentation at the pitch event. Interested in mentoring your team.',
      time: '1 day ago',
      unread: true,
      avatar: 'MR'
    },
    {
      id: 3,
      sender: 'Emily Watson',
      message: 'Have you considered implementing blockchain technology in your solution?',
      time: '2 days ago',
      unread: false,
      avatar: 'EW'
    },
    {
      id: 4,
      sender: 'David Kim',
      message: 'Let\'s schedule a call to discuss marketing strategies for your startup.',
      time: '3 days ago',
      unread: false,
      avatar: 'DK'
    }
  ]

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

        {/* Messages List */}
        <div className='flex-1 overflow-y-auto p-4 sm:p-6'>
            <div className='flex items-center justify-between mb-4'>
                <h3 className='text-lg font-bold flex items-center bg-gradient-to-r from-[#023047] to-[#034561] bg-clip-text text-transparent'>
                    <span className='w-6 h-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mr-3 text-sm shadow-sm'>💬</span>
                    Messages
                </h3>
                <button className='text-xs bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 px-2 py-1 rounded-full transition-all duration-300 text-slate-700 shadow-sm border border-purple-200/50'>
                    Mark All Read
                </button>
            </div>

            <div className='space-y-3 max-h-96 overflow-y-auto'>
                {messages.map((message) => (
                    <div key={message.id} className={`p-3 rounded-xl hover:from-purple-100 hover:to-pink-100 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md ${
                        message.unread ? 'bg-gradient-to-r from-purple-50 to-pink-50 border-l-2 border-purple-300' : 'bg-gradient-to-r from-slate-50 to-purple-50'
                    }`}>
                        <div className='flex items-start gap-3'>
                            <div className='w-8 h-8 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm'>
                                <span className='text-xs font-bold text-white'>
                                    {message.avatar}
                                </span>
                            </div>
                            <div className='flex-1 min-w-0'>
                                <div className='flex items-center justify-between mb-1'>
                                    <p className={`text-sm font-medium truncate ${message.unread ? 'text-slate-700' : 'text-slate-600'}`}>
                                        {message.sender}
                                    </p>
                                    {message.unread && (
                                        <span className='w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0 shadow-sm'></span>
                                    )}
                                </div>
                                <p className='text-xs text-slate-600 leading-relaxed line-clamp-2 mb-1'>
                                    {message.message}
                                </p>
                                <p className='text-xs text-slate-500'>{message.time}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mt-4 space-y-2'>
                <button className='w-full px-3 py-2 bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 rounded-lg text-sm font-medium transition-all duration-300 text-slate-700 shadow-md hover:shadow-lg border border-purple-200/50'>
                    View All Messages
                </button>
                <button className='w-full px-3 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 rounded-lg text-sm font-medium transition-all duration-300 text-slate-700 shadow-md hover:shadow-lg border border-blue-200/50'>
                    Compose Message
                </button>
            </div>
        </div>
    </div>
  )
}

export default RightbarMessages