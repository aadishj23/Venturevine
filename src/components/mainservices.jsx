import React from 'react'
import Services from './services'
import Servicesdata from './servicesdata'

function Mainservices() {
  const servicesdata= Servicesdata.map(services => {
    return(
      <Services key={services.id} servicename={services.servicename} image={services.image} description={services.description} />
  )})
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#8cc2da] via-[#7bb8d1] to-[#6ba4c4] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 sm:py-20 lg:py-24 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-60"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#88daee]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#5AC5DE]/20 rounded-full blur-3xl"></div>
      
      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header Section */}
        <div className='text-center mb-16 sm:mb-20 lg:mb-24'>
          <div className='inline-flex items-center justify-center mb-6'>
            <div className='w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-[#023047] to-[#034a6b] rounded-full flex items-center justify-center shadow-2xl shadow-black/30 mr-4'>
              <svg className='w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#023047] to-[#034a6b] leading-tight">
              Our Services
            </h1>
          </div>
          
          <p className='text-[#023047] text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed font-medium opacity-90'>
            Discover comprehensive solutions designed to accelerate your entrepreneurial journey and drive success
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 justify-items-center'>
            {servicesdata}
        </div>

        {/* Bottom CTA */}
        <div className='text-center mt-20 sm:mt-24 lg:mt-28'>
          <div className='bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 sm:p-10 lg:p-12 max-w-2xl mx-auto'>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#023047] mb-4'>
              Need Something Custom?
            </h3>
            <p className='text-[#023047] text-base sm:text-lg lg:text-xl mb-6 opacity-90'>
              Let's discuss how we can tailor our services to meet your specific needs
            </p>
            <button className='bg-gradient-to-r from-[#023047] to-[#034a6b] text-white font-semibold text-base sm:text-lg lg:text-xl px-8 py-4 rounded-2xl hover:from-[#034a6b] hover:to-[#023047] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#023047]/30 active:scale-95'>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mainservices