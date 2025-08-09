import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logoc.png'

function Sidebar({ onMobileClose, isMobileOpen }) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const location = useLocation()

  const navigationItems = [
    { name: 'Discover', route: '/community/discover', icon: '🔍', description: 'Explore trending content' },
    { name: 'My Community', route: '/community/myCommunity', icon: '🏠', description: 'Your dashboard' },
    { name: 'Requests', route: '/community/requests', icon: '🙋', description: 'Help & collaboration' },
    { name: 'Experts', route: '/community/experts', icon: '🎓', description: 'Industry mentors' },
    { name: 'Founder\'s Group', route: '/community/foundergroup', icon: '👥', description: 'Join communities' },
    { name: 'Post', route: '/community/post', icon: '✏️', description: 'Create content' },
    { name: 'Events', route: '/community/events', icon: '📅', description: 'Upcoming events' },
    { name: 'Settings', route: '/community/settings', icon: '⚙️', description: 'Account settings' }
  ]

  const isActiveRoute = (route) => location.pathname === route

  const handleNavigation = () => {
    // Close mobile sidebar when navigating
    if (onMobileClose) {
      onMobileClose()
    }
  }

  return (
    <div className={`flex flex-col h-full bg-gradient-to-b from-white to-slate-50 shadow-xl border-r border-slate-200/50 transition-all duration-300 ${
      isCollapsed ? 'w-16 lg:w-20' : 'w-64 lg:w-80'
    }`}>
        {/* Header */}
        <div className='flex items-center p-4 lg:p-6 bg-gradient-to-r from-white to-blue-50 border-b border-blue-200/30 shadow-sm'>
            {/* Mobile Close Button */}
            {onMobileClose && (
              <button
                onClick={onMobileClose}
                className='lg:hidden p-2 hover:bg-blue-100 rounded-xl transition-colors duration-200 mr-2'
              >
                <span className='text-[#023047] text-xl'>×</span>
              </button>
            )}
            
            <Link to='/' className='flex items-center flex-shrink-0' onClick={handleNavigation}>
                <div className='w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-[#023047] to-[#034561] rounded-xl flex items-center justify-center mr-3 shadow-md hover:shadow-lg transition-shadow duration-300'>
                    <span className='text-white text-sm lg:text-base font-bold'>←</span>
                </div>
            </Link>
            <img src={logoImg} alt="logo" className='w-10 h-10 lg:w-12 lg:h-12 mr-3 rounded-xl shadow-md' />
            {!isCollapsed && (
                <div className='flex-1 min-w-0'>
                    <h3 className='text-lg lg:text-xl font-bold bg-gradient-to-r from-[#023047] to-[#034561] bg-clip-text text-transparent leading-tight'>The VentureVine</h3>
                    <h3 className='text-base lg:text-lg font-semibold text-[#023047]/80 leading-tight'>Community</h3>
                </div>
            )}
            <button 
                onClick={() => setIsCollapsed(!isCollapsed)}
                className='ml-auto p-2 hover:bg-blue-100 rounded-xl transition-colors duration-200 hidden sm:block'
            >
                <span className='text-[#023047]'>{isCollapsed ? '→' : '←'}</span>
            </button>
        </div>

        {/* Profile Section */}
        <div className='p-4 lg:p-6 bg-gradient-to-br from-[#023047] to-[#034561] text-white m-4 lg:m-6 rounded-3xl shadow-xl border border-white/10'>
            <div className='flex flex-col items-center text-center'>
                <div className='w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-3 lg:mb-4 shadow-lg border-2 border-white/20'>
                    <span className='text-2xl lg:text-3xl'>👤</span>
                </div>
                {!isCollapsed && (
                    <>
                        <h4 className='text-lg lg:text-xl font-bold mb-1 text-white'>John Doe</h4>
                        <p className='text-sm lg:text-base text-blue-200 mb-4'>@johndoe_startup</p>
                        <div className='flex justify-center space-x-4 lg:space-x-6 w-full'>
                            <div className='text-center'>
                                <p className='text-lg lg:text-xl font-bold text-cyan-300'>23</p>
                                <p className='text-xs lg:text-sm text-blue-200'>Following</p>
                            </div>
                            <div className='text-center'>
                                <p className='text-lg lg:text-xl font-bold text-cyan-300'>107</p>
                                <p className='text-xs lg:text-sm text-blue-200'>Followers</p>
                            </div>
                            <div className='text-center'>
                                <p className='text-lg lg:text-xl font-bold text-cyan-300'>4</p>
                                <p className='text-xs lg:text-sm text-blue-200'>Posts</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>

        {/* Navigation */}
        <div className='flex-1 px-4 lg:px-6 pb-4 lg:pb-6 overflow-y-auto'>
            <nav className='space-y-2'>
                {navigationItems.map((item, index) => (
                    <Link
                        key={index}
                        to={item.route}
                        onClick={handleNavigation}
                        className={`flex items-center p-3 lg:p-4 rounded-2xl transition-all duration-300 group touch-manipulation ${
                            isActiveRoute(item.route)
                                ? 'bg-gradient-to-r from-[#023047] to-[#034561] text-white shadow-lg border border-blue-200/20'
                                : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#023047] hover:to-[#034561] hover:text-white active:bg-gradient-to-r active:from-[#023047] active:to-[#034561] active:text-white'
                        }`}
                    >
                        <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                            isActiveRoute(item.route) 
                                ? 'bg-white/20 shadow-inner' 
                                : 'bg-slate-100 group-hover:bg-white/20 group-active:bg-white/20 shadow-sm'
                        }`}>
                            <span className='text-xl lg:text-2xl'>{item.icon}</span>
                        </div>
                        {!isCollapsed && (
                            <div className='ml-3 lg:ml-4 flex-1 min-w-0'>
                                <h4 className='font-semibold text-sm lg:text-base truncate'>{item.name}</h4>
                                <p className={`text-xs lg:text-sm truncate transition-colors duration-300 ${
                                    isActiveRoute(item.route) 
                                        ? 'text-blue-200' 
                                        : 'text-gray-500 group-hover:text-blue-200 group-active:text-blue-200'
                                }`}>
                                    {item.description}
                                </p>
                            </div>
                        )}
                        {!isCollapsed && isActiveRoute(item.route) && (
                            <div className='w-2 h-2 bg-cyan-300 rounded-full flex-shrink-0 shadow-sm'></div>
                        )}
                    </Link>
                ))}
            </nav>
        </div>

        {/* Footer Actions */}
        {!isCollapsed && (
            <div className='p-4 lg:p-6 border-t border-slate-200/50 bg-gradient-to-r from-white to-slate-50'>
                <div className='space-y-3'>
                    <button className='w-full px-4 py-3 bg-gradient-to-r from-[#023047] to-[#034561] text-white rounded-xl font-medium hover:from-[#034561] hover:to-[#045c7a] active:from-[#045c7a] active:to-[#056c8a] transition-all duration-300 shadow-md hover:shadow-lg active:shadow-inner transform hover:scale-[1.02] active:scale-[0.98] touch-manipulation'>
                        Create Post
                    </button>
                    <button className='w-full px-4 py-3 bg-gradient-to-r from-slate-100 to-blue-100 text-slate-700 rounded-xl font-medium hover:from-blue-100 hover:to-cyan-100 active:from-cyan-100 active:to-blue-200 transition-all duration-300 shadow-sm hover:shadow-md active:shadow-inner touch-manipulation'>
                        Invite Friends
                    </button>
                </div>
            </div>
        )}
    </div>
  )
}

export default Sidebar