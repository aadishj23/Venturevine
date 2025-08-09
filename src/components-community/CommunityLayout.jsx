import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import Rightbar from './rightbar'

function CommunityLayout() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50'>
      <div className='flex flex-col lg:flex-row h-screen max-w-full overflow-hidden'>
        <Sidebar />
        <div className='flex-1 min-w-0 flex flex-col'>
          <Outlet />
        </div>
        <div className='hidden lg:block lg:w-80 xl:w-96'>
          <Rightbar />
        </div>
      </div>
    </div>
  )
}

export default CommunityLayout
