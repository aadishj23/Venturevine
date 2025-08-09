import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Sidebar from './sidebar'
import Rightbar from './rightbar'
import RightbarNotifications from './rightbarNotifications'
import RightbarMessages from './rightbarMessages'
import RightbarCollaboration from './rightbarcollaboration'
import CommunityRouter from './CommunityRouter'

// Rightbar component mapping based on URL query parameter
const rightbarMap = {
  'notifications': RightbarNotifications,
  'messages': RightbarMessages,
  'collaboration': RightbarCollaboration,
  // Default fallback
  'default': Rightbar
}

function CommunityLayoutWithRightbar() {
  const { section } = useParams()
  const [searchParams] = useSearchParams()
  
  // Get rightbar type from query parameter, fallback to default
  const rightbarType = searchParams.get('rightbar') || 'default'
  const RightbarComponent = rightbarMap[rightbarType] || rightbarMap['default']
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50'>
      <div className='flex flex-col lg:flex-row h-screen max-w-full overflow-hidden'>
        <Sidebar />
        <div className='flex-1 min-w-0 flex flex-col'>
          <CommunityRouter />
        </div>
        <div className='hidden lg:block lg:w-80 xl:w-96'>
          <RightbarComponent />
        </div>
      </div>
    </div>
  )
}

export default CommunityLayoutWithRightbar
