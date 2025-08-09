import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function MobileBottomNav() {
  const location = useLocation()
  
  const navItems = [
    { name: 'Discover', route: '/community/discover', icon: '🔍' },
    { name: 'Community', route: '/community/myCommunity', icon: '🏠' },
    { name: 'Post', route: '/community/post', icon: '✏️' },
    { name: 'Events', route: '/community/events', icon: '📅' },
    { name: 'More', route: '/community', icon: '⋯' }
  ]

  const isActiveRoute = (route) => {
    if (route === '/community') {
      return location.pathname === '/community' || location.pathname === '/community/'
    }
    return location.pathname === route
  }

  return (
    <div className='lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50'>
      <div className='flex justify-around items-center py-2 px-2'>
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.route}
            className={`flex flex-col items-center py-2 px-3 rounded-lg transition-all duration-200 min-w-0 flex-1 ${
              isActiveRoute(item.route)
                ? 'text-[#023047] bg-blue-50 shadow-sm'
                : 'text-slate-600 hover:text-[#023047] hover:bg-slate-50'
            }`}
          >
            <span className='text-xl mb-1'>{item.icon}</span>
            <span className='text-xs font-medium truncate w-full text-center'>{item.name}</span>
            {isActiveRoute(item.route) && (
              <div className='w-1 h-1 bg-[#023047] rounded-full mt-1'></div>
            )}
          </Link>
        ))}
      </div>
      
      {/* Safe area for devices with home indicator */}
      <div className='h-1 bg-white'></div>
    </div>
  )
}

export default MobileBottomNav
