import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Sidebar from './sidebar'
import Rightbar from './rightbar'
import RightbarNotifications from './rightbarNotifications'
import RightbarMessages from './rightbarMessages'
import RightbarCollaboration from './rightbarcollaboration'
import CommunityRouter from './CommunityRouter'
import MobileBottomNav from './MobileBottomNav'

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
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [isMobileRightbarOpen, setIsMobileRightbarOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  // Get rightbar type from query parameter, fallback to default
  const rightbarType = searchParams.get('rightbar') || 'default'
  const RightbarComponent = rightbarMap[rightbarType] || rightbarMap['default']
  
  // Handle navigation with loading state
  const handleNavigation = () => {
    setIsLoading(true)
    // Simulate loading for better UX
    setTimeout(() => setIsLoading(false), 300)
  }
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50'>
      {/* Loading Overlay */}
      {isLoading && (
        <div className='fixed inset-0 bg-black/20 z-50 flex items-center justify-center'>
          <div className='bg-white rounded-xl p-6 shadow-xl'>
            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#023047] mx-auto'></div>
            <p className='text-slate-600 mt-2 text-sm'>Loading...</p>
          </div>
        </div>
      )}
      
      <div className='flex flex-col lg:flex-row h-screen max-w-full overflow-hidden'>
        {/* Mobile Sidebar Overlay */}
        {isMobileSidebarOpen && (
          <div 
            className='fixed inset-0 bg-black/50 z-40 lg:hidden'
            onClick={() => setIsMobileSidebarOpen(false)}
          />
        )}
        
        {/* Mobile Rightbar Overlay */}
        {isMobileRightbarOpen && (
          <div 
            className='fixed inset-0 bg-black/50 z-40 lg:hidden'
            onClick={() => setIsMobileRightbarOpen(false)}
          />
        )}
        
        {/* Sidebar - Mobile responsive */}
        <div className={`fixed lg:relative z-50 h-full transition-transform duration-300 lg:transform-none ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <Sidebar 
            onMobileClose={() => setIsMobileSidebarOpen(false)}
            isMobileOpen={isMobileSidebarOpen}
          />
        </div>
        
        <div className='flex-1 min-w-0 flex flex-col'>
          {/* Mobile Header */}
          <div className='lg:hidden flex items-center justify-between p-4 bg-white border-b border-slate-200 shadow-sm'>
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className='p-2 hover:bg-slate-100 rounded-lg transition-colors active:bg-slate-200'
            >
              <svg className='w-6 h-6 text-slate-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
            <div className='flex items-center'>
              <img src='/logoc.png' alt="logo" className='w-8 h-8 rounded-lg' />
              <span className='ml-2 text-lg font-bold text-[#023047]'>VentureVine</span>
            </div>
            <button
              onClick={() => setIsMobileRightbarOpen(true)}
              className='p-2 hover:bg-slate-100 rounded-lg transition-colors active:bg-slate-200'
            >
              <svg className='w-6 h-6 text-slate-700' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' />
              </svg>
            </button>
          </div>
          
          <div className='pb-20 lg:pb-0'>
            <CommunityRouter />
          </div>
        </div>
        
        {/* Desktop Rightbar */}
        <div className='hidden lg:block lg:w-80 xl:w-96'>
          <RightbarComponent />
        </div>
        
        {/* Mobile Rightbar */}
        <div className={`fixed lg:hidden top-0 right-0 z-50 h-full w-80 transition-transform duration-300 ${
          isMobileRightbarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className='h-full bg-white shadow-xl'>
            <div className='flex items-center justify-between p-4 border-b border-slate-200'>
              <h3 className='text-lg font-semibold text-slate-800'>Quick Actions</h3>
              <button
                onClick={() => setIsMobileRightbarOpen(false)}
                className='p-2 hover:bg-slate-100 rounded-lg transition-colors active:bg-slate-200'
              >
                <span className='text-xl text-slate-600'>×</span>
              </button>
            </div>
            <div className='p-4'>
              <RightbarComponent />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  )
}

export default CommunityLayoutWithRightbar
