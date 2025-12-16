'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import { useRouter } from "next/navigation"
import { FiArrowRight, FiUsers, FiAward, FiCalendar } from 'react-icons/fi'
import { IoMdQuote } from 'react-icons/io'

const Hero = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const [quoteFade, setQuoteFade] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const slides = [
    {
      image: '/hero1.png',
      subtitle: "EXPERT, ANALYSIS, AND ACTION",
      title: "Maximizing Wealth With Expert-Led Insights",
      quote: "Take your investments to new heights with trusted insights from RGX"
    },
    {
      image: '/hero2.png',
      subtitle: "STRATEGY, GROWTH, AND SUCCESS",
      title: "Options Strategies For Smarter Market Moves",
      quote: "Take your investments to new heights with trusted insights from RGX"
    },
    {
      image: '/hero3.png',
      subtitle: "INSIGHT, PLANNING, AND RESULTS", 
      title: "Building Legacy Through Informed Decisions",
      quote: "Take your investments to new heights with trusted insights from RGX"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setQuoteFade(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length)
        setFade(true)
        setQuoteFade(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, [slides.length])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const currentSlide = slides[currentIndex]

  return (
    <div className="relative min-h-screen flex items-center justify-center lg:justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/10 via-transparent to-green-900/10 animate-gradient"></div>
      
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <Image
          src={currentSlide.image}
          alt="Hero background"
          fill
          className={`object-cover transition-opacity duration-1000 ${
            fade ? 'opacity-100' : 'opacity-70'
          }`}
          priority
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 lg:from-black/70 lg:via-black/50 lg:to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>
        {/* Subtle grid pattern */}
       
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 blur-xl animate-pulse delay-1000"></div>

      {/* Text Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto mt-20 md:mt-0 lg:ml-6 text-center lg:text-left">
        <div className={`transition-all duration-1000 ${
          fade ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 lg:translate-x-10'
        }`}>
          {/* Subtitle with animated underline */}
          <div className="relative inline-block mb-4 sm:mb-6">
            <h5 className="text-green-400 font-semibold text-sm sm:text-lg mb-2 tracking-wider uppercase">
              {currentSlide.subtitle}
            </h5>
            <div className="h-1 w-1/2 mx-auto lg:mx-0 bg-gradient-to-r from-green-500/0 via-green-500 to-green-500/0 animate-underline"></div>
          </div>
          
          {/* Responsive title with gradient */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8">
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg blur-xl opacity-30 group-hover:opacity-100 transition duration-1000"></span>
              <span className="relative bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {currentSlide.title}
              </span>
            </span>
          </h1>

          {/* Buttons - Modern Design */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-8 sm:mb-12">
            <button 
              onClick={() => router.push('/services')} 
              className="group relative w-full sm:w-auto overflow-hidden rounded-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-bold py-3 sm:py-4 px-6 sm:px-10 shadow-2xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base">
                Start Your Journey
                <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </button>
            
            {/* Glassmorphism Secondary Button */}
            <button className="group relative w-full sm:w-auto overflow-hidden rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 transition-all duration-300 text-sm sm:text-base hover:border-white/40">
              <span className="relative flex items-center justify-center gap-2">
                <FiCalendar className="w-4 h-4" />
                Set up a one-to-one meeting
              </span>
            </button>
          </div>

          {/* Stats - Card Style */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 min-w-[120px] text-center lg:text-left hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FiUsers className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-green-400">300+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Clients Served</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-6 min-w-[120px] text-center lg:text-left hover:bg-white/10 transition-all duration-300 group">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500/20 to-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FiAward className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400">75+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Quote Card */}
      <div className="hidden md:block absolute bottom-20 lg:bottom-32 right-4 lg:right-12 z-10 max-w-xs lg:max-w-md">
        <div className={`transition-all duration-1000 transform ${
          quoteFade 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4'
        }`}>
          <div className="relative group">
            {/* Card with gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-gradient-to-br from-black/40 via-black/30 to-black/20 backdrop-blur-xl rounded-2xl p-4 lg:p-6 border border-white/10 shadow-2xl">
              <div className="flex items-start gap-3 lg:gap-4">
                <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                  <IoMdQuote className="text-white text-sm lg:text-lg" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm lg:text-lg font-light leading-relaxed mb-3 lg:mb-4">
                    Unlock smarter investing with the trusted expertise of Tredify Research
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="w-12 lg:w-16 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                    <div className="text-xs text-gray-400 italic">- Expert Insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators - Modern Dots */}
      <div className="absolute bottom-20 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setFade(false)
              setQuoteFade(false)
              setTimeout(() => {
                setCurrentIndex(index)
                setFade(true)
                setQuoteFade(true)
              }, 200)
            }}
            className="group"
          >
            <div className="relative">
              <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-green-400 to-blue-400 scale-125' 
                  : 'bg-white/30 hover:bg-white/60'
              }`}></div>
              {index === currentIndex && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-blue-400 animate-ping opacity-20"></div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Scroll Indicator - Animated */}
      <div className="hidden sm:block absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce-slow flex flex-col items-center">
          <span className="text-white/60 text-xs mb-2 tracking-widest">EXPLORE</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-green-400 to-blue-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
        
        @keyframes underline {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); }
        }
        .animate-underline {
          animation: underline 3s ease-in-out infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </div>
  )
}

export default Hero