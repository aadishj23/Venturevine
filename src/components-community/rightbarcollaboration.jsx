import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function RightbarCollaboration() {
  const location = useLocation()
  
  const quickActions = [
    { name: 'Notifications', rightbar: 'notifications', icon: '🔔', count: 5 },
    { name: 'Messages', rightbar: 'messages', icon: '💬', count: 3 },
    { name: 'Collaboration', rightbar: 'collaboration', icon: '🤝', count: 2, active: true }
  ]
  
  // Helper function to create URL with rightbar query parameter
  const createRightbarUrl = (rightbarType) => {
    return `${location.pathname}?rightbar=${rightbarType}`
  }

  const collaborationRequests = [
    {
      id: 1,
      type: 'Co-founder',
      title: 'Looking for Technical Co-founder',
      requester: 'Alex Johnson',
      skills: ['React', 'Node.js', 'AWS'],
      equity: '15-20%',
      status: 'new'
    },
    {
      id: 2,
      type: 'Partnership',
      title: 'Strategic Partnership Opportunity',
      requester: 'Maria Garcia',
      skills: ['Marketing', 'Sales', 'Growth'],
      equity: 'Revenue Share',
      status: 'pending'
    }
  ]

  const activeProjects = [
    {
      id: 1,
      name: 'FinTech MVP',
      collaborators: ['John Doe', 'Sarah Chen'],
      progress: 75,
      deadline: 'Dec 20, 2024'
    },
    {
      id: 2,
      name: 'Market Research',
      collaborators: ['Mike Wilson'],
      progress: 45,
      deadline: 'Dec 25, 2024'
    }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-green-500'
      case 'pending': return 'bg-yellow-500'
      case 'approved': return 'bg-blue-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className='flex flex-col bg-gradient-to-br from-white to-slate-50 w-full h-full max-w-sm lg:max-w-xs xl:max-w-sm mx-2 my-2 lg:mx-4 lg:my-4 rounded-3xl text-slate-800 overflow-hidden shadow-xl border border-slate-200/50'>
        {/* Quick Actions */}
        <div className='flex justify-evenly p-4 sm:p-6 border-b border-slate-200/50 bg-gradient-to-r from-blue-50/50 to-cyan-50/50'>
            {quickActions.map((action, index) => (
                <Link key={index} to={createRightbarUrl(action.rightbar)} className='relative group'>
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg ${
                        action.active ? 'bg-gradient-to-br from-emerald-200 to-teal-200' : 'bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200'
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

        {/* Collaboration Content */}
        <div className='flex-1 overflow-y-auto p-4 sm:p-6'>
            <h3 className='text-lg font-bold mb-4 flex items-center bg-gradient-to-r from-[#023047] to-[#034561] bg-clip-text text-transparent'>
                <span className='w-6 h-6 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-lg flex items-center justify-center mr-3 text-sm shadow-sm'>🤝</span>
                Collaboration
            </h3>

            {/* Collaboration Requests */}
            <div className='mb-6'>
                <h4 className='text-sm font-semibold mb-3 text-slate-700'>New Requests</h4>
                <div className='space-y-3 max-h-48 overflow-y-auto'>
                    {collaborationRequests.map((request) => (
                        <div key={request.id} className='bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-3 hover:from-emerald-100 hover:to-teal-100 transition-all duration-300 shadow-sm hover:shadow-md border border-emerald-100/50'>
                            <div className='flex items-start justify-between mb-2'>
                                <div className='flex-1'>
                                    <div className='flex items-center gap-2 mb-1'>
                                        <span className='text-xs bg-gradient-to-r from-emerald-100 to-teal-100 px-2 py-1 rounded-full text-slate-700 shadow-sm'>
                                            {request.type}
                                        </span>
                                        <span className={`w-2 h-2 rounded-full ${getStatusColor(request.status)}`}></span>
                                    </div>
                                    <p className='text-sm font-medium mb-1 text-slate-700'>{request.title}</p>
                                    <p className='text-xs text-slate-600 mb-2'>by {request.requester}</p>
                                </div>
                            </div>
                            <div className='flex flex-wrap gap-1 mb-2'>
                                {request.skills.map((skill, index) => (
                                    <span key={index} className='text-xs bg-gradient-to-r from-slate-100 to-emerald-100 px-2 py-1 rounded-full text-slate-700 shadow-sm'>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className='text-xs text-slate-600'>Equity: {request.equity}</span>
                                <div className='flex gap-1'>
                                    <button className='text-xs bg-green-600 hover:bg-green-700 px-2 py-1 rounded transition-colors duration-300'>
                                        Accept
                                    </button>
                                    <button className='text-xs bg-gradient-to-r from-slate-100 to-emerald-100 hover:from-slate-200 hover:to-emerald-200 px-2 py-1 rounded transition-all duration-300 text-slate-700 shadow-sm'>
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Active Projects */}
            <div className='mb-4'>
                <h4 className='text-sm font-semibold mb-3 text-slate-700'>Active Projects</h4>
                <div className='space-y-3'>
                    {activeProjects.map((project) => (
                        <div key={project.id} className='bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-3 hover:from-blue-100 hover:to-cyan-100 transition-all duration-300 shadow-sm hover:shadow-md border border-blue-100/50'>
                            <div className='flex items-center justify-between mb-2'>
                                <p className='text-sm font-medium text-slate-700'>{project.name}</p>
                                <span className='text-xs text-slate-600'>{project.progress}%</span>
                            </div>
                            <div className='w-full bg-slate-200 rounded-full h-2 mb-2'>
                                <div 
                                    className='bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300 shadow-sm'
                                    style={{ width: `${project.progress}%` }}
                                ></div>
                            </div>
                            <div className='flex items-center justify-between text-xs text-slate-600'>
                                <span>👥 {project.collaborators.join(', ')}</span>
                                <span>📅 {project.deadline}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='space-y-2'>
                <button className='w-full px-3 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200 rounded-lg text-sm font-medium transition-all duration-300 text-slate-700 shadow-md hover:shadow-lg border border-emerald-200/50'>
                    Browse Opportunities
                </button>
                <button className='w-full px-3 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 rounded-lg text-sm font-medium transition-all duration-300 text-slate-700 shadow-md hover:shadow-lg border border-blue-200/50'>
                    Post Collaboration
                </button>
            </div>
        </div>
    </div>
  )
}

export default RightbarCollaboration