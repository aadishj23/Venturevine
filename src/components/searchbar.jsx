import React from "react";

export default function Searchbar(){
    return(
        <div className="relative -my-6 sm:-my-7 md:-my-8 px-4 sm:px-6 md:px-8 lg:px-16">
            <input 
                type="text" 
                className="block w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl mx-auto px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-4 lg:py-5 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl rounded-xl sm:rounded-2xl border-0 shadow-lg shadow-black/50 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:shadow-xl transition-all duration-300 placeholder:text-gray-500 bg-white relative z-10" 
                placeholder="🔍 Search by...." 
            />
        </div>
    )
}