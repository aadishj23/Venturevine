import React, { useState } from 'react'

function MiddlebarSettings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    marketing: false
  })

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    showEmail: false,
    showActivity: true
  })

  const handleNotificationChange = (type) => {
    setNotifications(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  const handlePrivacyChange = (type) => {
    setPrivacy(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  return (
    <div className='mx-2 sm:mx-4 lg:mx-6 px-2 sm:px-4 h-full flex flex-col'>
        <div className="mt-3 sm:mt-4">
            <input 
                type="text" 
                placeholder="🔍 Search settings..." 
                className="block w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl bg-white border-2 border-slate-200 text-slate-700 placeholder:text-slate-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400 focus:shadow-xl transition-all duration-300"
            />
        </div>
        <div className='bg-gradient-to-br from-white to-slate-50 flex-1 mt-4 sm:mt-6 lg:mt-8 rounded-3xl p-4 sm:p-6 lg:p-8 text-slate-800 shadow-xl border border-slate-200/50 flex flex-col overflow-y-auto'> 
            <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
                    Account Settings
                </h2>

                {/* Profile Settings */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/50 rounded-2xl p-4 sm:p-6 mb-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center text-slate-800">
                        <span className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mr-3 shadow-md">
                            👤
                        </span>
                        Profile Settings
                    </h3>
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                                <p className="font-medium text-slate-800">Display Name</p>
                                <p className="text-sm text-slate-600">How others see your name</p>
                            </div>
                            <input 
                                type="text" 
                                defaultValue="John Doe"
                                className="px-4 py-2 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 shadow-sm"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                            <div>
                                <p className="font-medium text-slate-800">Bio</p>
                                <p className="text-sm text-slate-600">Tell others about yourself</p>
                            </div>
                            <textarea 
                                defaultValue="Passionate entrepreneur building the future"
                                className="px-4 py-2 bg-slate-50 border-2 border-slate-200 rounded-lg text-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 resize-none h-20 shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/50 rounded-2xl p-4 sm:p-6 mb-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center text-slate-800">
                        <span className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mr-3 shadow-md">
                            🔔
                        </span>
                        Notification Preferences
                    </h3>
                    <div className="space-y-4">
                        {Object.entries(notifications).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium capitalize text-slate-800">
                                        {key === 'sms' ? 'SMS' : key} Notifications
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        {key === 'email' && 'Receive notifications via email'}
                                        {key === 'push' && 'Browser push notifications'}
                                        {key === 'sms' && 'Text message alerts'}
                                        {key === 'marketing' && 'Marketing and promotional content'}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleNotificationChange(key)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 shadow-sm ${
                                        value ? 'bg-blue-500' : 'bg-slate-300'
                                    }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-md ${
                                            value ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Privacy Settings */}
                <div className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/50 rounded-2xl p-4 sm:p-6 mb-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-4 flex items-center text-slate-800">
                        <span className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mr-3 shadow-md">
                            🔒
                        </span>
                        Privacy Settings
                    </h3>
                    <div className="space-y-4">
                        {Object.entries(privacy).map(([key, value]) => (
                            <div key={key} className="flex items-center justify-between">
                                <div>
                                    <p className="font-medium text-slate-800">
                                        {key === 'profileVisible' && 'Public Profile'}
                                        {key === 'showEmail' && 'Show Email'}
                                        {key === 'showActivity' && 'Show Activity'}
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        {key === 'profileVisible' && 'Make your profile visible to other users'}
                                        {key === 'showEmail' && 'Display your email on your profile'}
                                        {key === 'showActivity' && 'Show your recent activity to others'}
                                    </p>
                                </div>
                                <button
                                    onClick={() => handlePrivacyChange(key)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 shadow-sm ${
                                        value ? 'bg-blue-500' : 'bg-slate-300'
                                    }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 shadow-md ${
                                            value ? 'translate-x-6' : 'translate-x-1'
                                        }`}
                                    />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-slate-200 hover:to-blue-200 text-slate-700 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50">
                        Reset to Default
                    </button>
                    <button className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MiddlebarSettings