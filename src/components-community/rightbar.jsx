import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Rightbar() {
  const location = useLocation()
  
  const quickActions = [
    { name: 'Notifications', rightbar: 'notifications', icon: '🔔', count: 5 },
    { name: 'Messages', rightbar: 'messages', icon: '💬', count: 3 },
    { name: 'Collaboration', rightbar: 'collaboration', icon: '🤝', count: 2 }
  ]
  
  // Helper function to create URL with rightbar query parameter
  const createRightbarUrl = (rightbarType) => {
    return `${location.pathname}?rightbar=${rightbarType}`
  }

  const upcomingEvents = [
    { title: 'Startup Pitch Night', date: 'Dec 15', time: '6:00 PM' },
    { title: 'Fundraising Workshop', date: 'Dec 18', time: '2:00 PM' }
  ]

  const suggestedConnections = [
    { name: 'Alex Johnson', title: 'Product Manager', company: 'TechCorp' },
    { name: 'Maria Garcia', title: 'Startup Advisor', company: 'VentureHub' }
  ]

  return (
    <div className='flex flex-col bg-gradient-to-br from-white to-slate-50 w-full h-full max-w-sm lg:max-w-xs xl:max-w-sm mx-2 my-2 lg:mx-4 lg:my-4 rounded-3xl text-slate-800 overflow-hidden shadow-xl border border-slate-200/50'>
        {/* Quick Actions */}
        <div className='flex justify-evenly p-4 sm:p-6 border-b border-slate-200/50 bg-gradient-to-r from-blue-50/50 to-cyan-50/50'>
            {quickActions.map((action, index) => (
                <Link key={index} to={createRightbarUrl(action.rightbar)} className='relative group'>
                    <div className='w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center hover:from-blue-200 hover:to-cyan-200 active:from-blue-300 active:to-cyan-300 transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg active:shadow-inner touch-manipulation'>
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

        {/* Welcome Section */}
        <div className='p-4 sm:p-6 overflow-y-auto flex-1'>
            <div className='text-center mb-6'>
                <div className='w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg'>
                    <span className='text-2xl'>👋</span>
                </div>
                <h3 className='text-lg font-bold mb-2 bg-gradient-to-r from-[#023047] to-[#034561] bg-clip-text text-transparent'>Welcome to VentureVine!</h3>
                <p className='text-sm text-slate-600 leading-relaxed'>
                    Connect, collaborate, and grow your startup with our vibrant entrepreneur community.
                </p>
            </div>

            {/* Upcoming Events */}
            <div className='mb-6'>
                <h4 className='text-sm font-semibold mb-3 flex items-center text-slate-700'>
                    <span className='w-4 h-4 bg-gradient-to-r from-blue-100 to-cyan-100 rounded mr-2 flex items-center justify-center text-xs shadow-sm'>📅</span>
                    Upcoming Events
                </h4>
                <div className='space-y-2'>
                    {upcomingEvents.map((event, index) => (
                        <div key={index} className='bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 hover:from-blue-100 hover:to-cyan-100 active:from-blue-200 active:to-cyan-200 transition-all duration-300 border border-blue-100/50 shadow-sm'>
                            <p className='text-sm font-medium mb-1 text-slate-700'>{event.title}</p>
                            <p className='text-xs text-slate-500'>{event.date} • {event.time}</p>
                        </div>
                    ))}
                </div>
                <button className='w-full mt-3 px-3 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 active:from-blue-300 active:to-cyan-300 rounded-lg text-sm font-medium transition-all duration-300 text-slate-700 shadow-md hover:shadow-lg active:shadow-inner border border-blue-200/50 touch-manipulation'>
                    View All Events
                </button>
            </div>

            {/* Suggested Connections */}
            <div>
                <h4 className='text-sm font-semibold mb-3 flex items-center text-slate-700'>
                    <span className='w-4 h-4 bg-gradient-to-r from-emerald-100 to-teal-100 rounded mr-2 flex items-center justify-center text-xs shadow-sm'>🤝</span>
                    Connect with Founders
                </h4>
                <div className='space-y-3'>
                    {suggestedConnections.map((person, index) => (
                        <div key={index} className='flex items-center gap-3'>
                            <div className='w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-md'>
                                <span className='text-xs font-bold text-white'>
                                    {person.name.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <div className='flex-1 min-w-0'>
                                <p className='text-sm font-medium truncate text-slate-700'>{person.name}</p>
                                <p className='text-xs text-slate-500 truncate'>{person.title}</p>
                                <p className='text-xs text-slate-400 truncate'>{person.company}</p>
                            </div>
                            <button className='px-2 py-1 bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200 active:from-emerald-300 active:to-teal-300 rounded text-xs font-medium transition-all duration-300 flex-shrink-0 text-slate-700 shadow-sm border border-emerald-200/50 touch-manipulation'>
                                Connect
                            </button>
                        </div>
                    ))}
                </div>
                <button className='w-full mt-3 px-3 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200 active:from-emerald-300 active:to-teal-300 rounded-lg text-sm font-medium transition-all duration-300 text-slate-700 shadow-md hover:shadow-lg active:shadow-inner border border-emerald-200/50 touch-manipulation'>
                    Discover More
                </button>
            </div>
        </div>
    </div>
  )
}

export default Rightbar