import React from 'react'

function MiddlebarEvents() {
  const events = [
    {
      id: 1,
      title: "Startup Pitch Night",
      date: "Dec 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Innovation Hub, Downtown",
      attendees: 45,
      category: "Networking",
      description: "Join us for an evening of innovative pitches from emerging startups"
    },
    {
      id: 2,
      title: "Fundraising Workshop",
      date: "Dec 18, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Virtual Event",
      attendees: 120,
      category: "Education",
      description: "Learn the fundamentals of raising capital for your startup"
    },
    {
      id: 3,
      title: "Tech Founders Meetup",
      date: "Dec 22, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "TechSpace Co-working",
      attendees: 78,
      category: "Networking",
      description: "Connect with fellow tech entrepreneurs and share experiences"
    }
  ]

  return (
    <div className='mx-2 sm:mx-4 lg:mx-6 px-2 sm:px-4 min-h-full flex flex-col'>
        <div className="mt-3 sm:mt-4">
            <input 
                type="text" 
                placeholder="🔍 Search events..." 
                className="block w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto px-6 sm:px-8 md:px-10 py-2 sm:py-3 text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl bg-white border-2 border-slate-200 text-slate-700 placeholder:text-slate-500 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:border-blue-400 focus:shadow-xl transition-all duration-300"
            />
        </div>
        <div className='bg-gradient-to-br from-white to-slate-50 flex-1 mt-4 sm:mt-6 lg:mt-8 rounded-3xl p-4 sm:p-6 lg:p-8 text-slate-800 shadow-xl border border-slate-200/50 flex flex-col'> 
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-0">
                    Upcoming Events
                </h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-blue-200/50">
                        All Events
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-emerald-100 to-teal-100 hover:from-emerald-200 hover:to-teal-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-emerald-200/50">
                        This Week
                    </button>
                    <button className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 text-slate-700 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-purple-200/50">
                        Virtual
                    </button>
                </div>
            </div>

            <div className="space-y-4 sm:space-y-6">
                {events.map(event => (
                    <div key={event.id} className="bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200/50 rounded-2xl p-4 sm:p-6 hover:from-blue-50 hover:to-cyan-50 hover:shadow-lg transition-all duration-300">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                            <div className="flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">{event.title}</h3>
                                    <span className="text-xs sm:text-sm bg-gradient-to-r from-blue-100 to-cyan-100 text-slate-700 px-3 py-1 rounded-full w-fit font-medium border border-blue-200/50">
                                        {event.category}
                                    </span>
                                </div>
                                <p className="text-sm sm:text-base text-slate-700 mb-3 leading-relaxed">
                                    {event.description}
                                </p>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm text-slate-600">
                                    <span className="flex items-center gap-1">📅 {event.date}</span>
                                    <span className="flex items-center gap-1">🕐 {event.time}</span>
                                    <span className="flex items-center gap-1">📍 {event.location}</span>
                                    <span className="flex items-center gap-1">👥 {event.attendees} attending</span>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-4 lg:mt-0 lg:ml-6">
                                <button className="px-4 py-2 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-slate-200 hover:to-blue-200 text-slate-700 rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50">
                                    Learn More
                                </button>
                                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button className="px-6 py-3 bg-gradient-to-r from-slate-100 to-blue-100 hover:from-blue-100 hover:to-cyan-100 text-slate-700 rounded-xl font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200/50">
                    Load More Events
                </button>
            </div>
        </div>
    </div>
  )
}

export default MiddlebarEvents