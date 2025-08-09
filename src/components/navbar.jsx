import React, { useState } from "react";
import { Link } from "react-router-dom";
import Circlelogo from '../assets/logoc.png';
import BackgroundImage from '../assets/bg-3.png';

export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <div className="bg-cover bg-top bg-no-repeat pb-32 sm:pb-40 lg:pb-48 relative overflow-hidden" style={{backgroundImage: `url(${BackgroundImage})`}}>
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#023047]/80 via-[#023047]/60 to-transparent"></div>
            
            {/* Decorative Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-[#88daee]/20 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-40 h-40 bg-[#5AC5DE]/20 rounded-full blur-3xl"></div>
            
            <nav className="bg-[#023047]/95 backdrop-blur-sm border-b border-white/10 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo and Brand */}
                    <div className="flex items-center flex-shrink-0 group">
                        <div className="relative">
                            <img src={Circlelogo} alt="Logo" className="h-10 sm:h-11 lg:h-12 mx-2 transition-transform duration-300 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-[#88daee]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb8500] to-[#ffb703] font-bold text-lg sm:text-xl lg:text-2xl ml-2 shadow-black text-shadow-lg">
                            VentureVine
                        </h3>
                    </div>

                    {/* Desktop Navigation Menu */}
                    <div className="hidden lg:flex flex-1 justify-center mx-8">
                        <ul className="flex space-x-8 xl:space-x-12">
                            <li className="group">
                                <span className="text-white font-bold text-lg xl:text-xl hover:text-[#fb8500] hover:cursor-pointer transition-all duration-300 relative">
                                    Companies
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb8500] group-hover:w-full transition-all duration-300"></div>
                                </span>
                            </li>
                            <Link to="/community" className="group">
                                <span className="text-white font-bold text-lg xl:text-xl hover:text-[#fb8500] hover:cursor-pointer transition-all duration-300 relative">
                                    Community
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb8500] group-hover:w-full transition-all duration-300"></div>
                                </span>
                            </Link>
                            <li className="group">
                                <span className="text-white font-bold text-lg xl:text-xl hover:text-[#fb8500] hover:cursor-pointer transition-all duration-300 relative">
                                    Services
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb8500] group-hover:w-full transition-all duration-300"></div>
                                </span>
                            </li>
                            <li className="group">
                                <span className="text-white font-bold text-lg xl:text-xl hover:text-[#fb8500] hover:cursor-pointer transition-all duration-300 relative">
                                    Raise Capital
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb8500] group-hover:w-full transition-all duration-300"></div>
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex space-x-3">
                        <Link to='/Signin'>
                            <button className="bg-gradient-to-r from-[#8ecae6] to-[#7bb8d1] text-white font-semibold text-lg px-6 py-3 rounded-2xl w-32 shadow-lg shadow-black/50 hover:from-[#7bb8d1] hover:to-[#6ba4c4] transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95">
                                Sign In
                            </button>
                        </Link>
                        <Link to='/Signup'>
                            <button className="bg-gradient-to-r from-[#219ebc] to-[#1e8aa3] text-white font-semibold text-lg px-6 py-3 rounded-2xl w-32 shadow-lg shadow-black/50 hover:from-[#1e8aa3] hover:to-[#1a7a8f] transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95">
                                Sign Up
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-[#fb8500] focus:outline-none focus:text-[#fb8500] transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden border-t border-white/20 mt-2 pt-4 pb-6 bg-[#023047]/95 backdrop-blur-sm rounded-b-2xl">
                        <ul className="space-y-4 px-4">
                            <li className="text-white font-bold text-lg hover:text-[#fb8500] hover:cursor-pointer transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10">
                                Companies
                            </li>
                            <Link to="/community" className="block">
                                <li className="text-white font-bold text-lg hover:text-[#fb8500] hover:cursor-pointer transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10">
                                    Community
                                </li>
                            </Link>
                            <li className="text-white font-bold text-lg hover:text-[#fb8500] hover:cursor-pointer transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10">
                                Services
                            </li>
                            <li className="text-white font-bold text-lg hover:text-[#fb8500] hover:cursor-pointer transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10">
                                Raise Capital
                            </li>
                        </ul>
                        <div className="flex flex-col space-y-3 mt-6 px-4">
                            <Link to='/Signin'>
                                <button className="w-full bg-gradient-to-r from-[#8ecae6] to-[#7bb8d1] text-white font-semibold text-lg py-3 rounded-2xl shadow-lg shadow-black/50 hover:from-[#7bb8d1] hover:to-[#6ba4c4] transition-all duration-300 transform hover:scale-105 active:scale-95">
                                    Sign In
                                </button>
                            </Link>
                            <Link to='/Signup'>
                                <button className="w-full bg-gradient-to-r from-[#219ebc] to-[#1e8aa3] text-white font-semibold text-lg py-3 rounded-2xl shadow-lg shadow-black/50 hover:from-[#1e8aa3] hover:to-[#1a7a8f] transition-all duration-300 transform hover:scale-105 active:scale-95">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <div className="text-center mt-12 sm:mt-16 lg:mt-20 px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Main Title */}
                    <div className="mb-8 sm:mb-12">
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] via-[#fb8500] to-[#FFB703] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight shadow-black text-shadow-lg">
                            Fueling your
                        </h1>
                        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB703] via-[#fb8500] to-[#FFB703] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight shadow-black text-shadow-lg">
                            Entrepreneurial Journey...
                        </h1>
                    </div>
                    
                    {/* Subtitle */}
                    <div className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-4xl mx-auto shadow-black text-shadow-lg leading-relaxed font-medium">
                        <p>Whether you're just starting out with a groundbreaking idea or you're looking to scale your startup to new heights, VentureVine is here to help.</p>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-12 lg:mt-16">
                        <button className="bg-gradient-to-r from-[#fb8500] to-[#FFB703] text-[#023047] font-bold text-base sm:text-lg lg:text-xl px-8 py-4 rounded-2xl shadow-2xl shadow-black/50 hover:from-[#FFB703] hover:to-[#fb8500] transition-all duration-300 transform hover:scale-105 hover:shadow-xl active:scale-95">
                            Get Started
                        </button>
                        <button className="border-2 border-white text-white font-semibold text-base sm:text-lg lg:text-xl px-8 py-4 rounded-2xl hover:bg-white hover:text-[#023047] transition-all duration-300 transform hover:scale-105 active:scale-95">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}