import React from 'react'

function Services(props) {
  return (
    <div className="w-full max-w-sm mx-auto bg-gradient-to-br from-[#dae4e9] via-[#8cc2da] to-[#4F7080] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 group border border-white/30 backdrop-blur-sm overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Header Section */}
        <div className="relative z-10 text-center mb-6 sm:mb-8">
            <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-[#023047] mb-4 group-hover:text-white transition-all duration-500 leading-tight'>
                {props.servicename}
            </h1>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mb-6 sm:mb-8 relative z-10">
            <div className="relative group/image">
                <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-2xl overflow-hidden shadow-2xl shadow-black/30 transition-all duration-500 group-hover:shadow-[#023047]/50">
                    <img 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        src={props.image}  
                        alt={props.servicename}
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#023047]/20 to-[#023047]/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#88daee] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#5AC5DE] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200"></div>
            </div>
        </div>

        {/* Description Section */}
        <div className="flex-grow mb-6 sm:mb-8 relative z-10">
            <p className='text-sm sm:text-base lg:text-lg text-[#023047] text-center leading-relaxed px-2 group-hover:text-white transition-all duration-500 font-medium'>
                {props.description}
            </p>
        </div>

        {/* Button Section */}
        <div className="relative z-10">
            <button className='w-full bg-transparent text-white text-sm sm:text-base lg:text-lg font-semibold hover:font-bold bg-gradient-to-r from-[#023047] to-[#034a6b] hover:from-[#034a6b] hover:to-[#023047] hover:text-white py-3 sm:py-4 px-6 sm:px-8 rounded-2xl transition-all duration-500 cursor-pointer border-2 border-white hover:border-white hover:shadow-2xl hover:shadow-[#5AC5DE]/30 group-hover:border-white transform hover:scale-105 active:scale-95'>
                Explore Now
            </button>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#023047]/90 to-[#034a6b]/90 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>
    </div>
  )
}

export default Services